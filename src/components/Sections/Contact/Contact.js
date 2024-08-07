import React, { useState, useRef } from 'react';
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

import { useEnv } from '../../EnvContext';

import DoctoraliaWidget from './Doctoralia';

export default function Contact () {
    const { handleSubmit: getInfo, register: registro, reset } = useForm();
    const [ref, inView] = useInView({ triggerOnce: true });
    const { serviceId, templateId, mailPublicKey } = useEnv();
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
        setIsActive(false);
    };

    return (
        <Box ref={ref} align="center" sx={{ zIndex: 1 }}>
            <Grow in={inView} mountOnEnter unmountOnExit timeout={1000}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'column', lg: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Paper
                        sx={{
                            width: { xs: '70%', md: '50%', lg: '30%' },
                            backgroundColor: '#white',
                            padding: 1,
                            color: 'white',
                            borderRadius: 5,
                            marginBottom: 2,
                            mx: 2
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
                                                    size="small"
                                                    fullWidth
                                                    label="Nombre"
                                                    {...registro('name', { required: true })}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    label="Email"
                                                    {...registro('email', { required: true })}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    label="Teléfono"
                                                    {...registro('cellphone', { required: true })}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    label="Asunto"
                                                    {...registro('subject', { required: true })}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    multiline={true}
                                                    rows={3}
                                                    label="Mensaje"
                                                    {...registro('message', { required: true })}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    disabled={!isActive}
                                                    variant="contained"
                                                    onClick={getInfo(onSubmit)}
                                                    sx={{ textTransform: 'none' }}
                                                >
                                                    Enviar
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                    <DoctoraliaWidget />
                </Box>
            </Grow>
        </Box>
    );
}
