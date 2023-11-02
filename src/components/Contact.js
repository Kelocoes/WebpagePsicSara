import React, { useState } from 'react';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { useEnv } from './EnvContext';
import { useRef } from 'react';

export default function Contact() {
    const { handleSubmit: getInfo, register: registro, reset } = useForm();
    const [ref, inView] = useInView({ triggerOnce: true, delay: 250 });
    const { serviceId, templateId, mailPublicKey } = useEnv()
    const [isActive, setIsActive] = useState(true);
    const form = useRef();

    const onSubmit = (data) => {
        emailjs.sendForm(serviceId, templateId, form.current, mailPublicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        reset();
        setIsActive(false)
    }

    return (
        <Box ref={ref} align="center">
            <Grow in={inView} mountOnEnter unmountOnExit timeout={1000}>
                <Paper
                    sx={{
                        width: { xs: '70%', md: '60%' },
                        backgroundColor: '#white',
                        padding: 1,
                        color: 'white',
                        borderRadius: 5,
                        marginBottom: 5
                    }}
                    elevation={10}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box>
                                <Typography variant="h4" fontWeight="bold" align="center" color="grey">Contacto</Typography>
                                <Divider variant="middle" sx={{ marginX: 10 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ paddingX: { xs: 2, md: 10 }, marginBottom: 2 }}>
                                <form ref={form} onSubmit={getInfo(onSubmit)}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Nombre"
                                                {...registro('name', { required: true })}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                {...registro('email', { required: true })}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Teléfono"
                                                {...registro('cellphone', { required: true })}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Asunto"
                                                {...registro('subject', { required: true })}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                multiline={true}
                                                rows={3}
                                                label="Mensaje"
                                                {...registro('message', { required: true })}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button disabled={!isActive} variant="contained" onClick={getInfo(onSubmit)} sx={{ textTransform: 'none' }}>Enviar</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Grow>
        </Box>
    )
}