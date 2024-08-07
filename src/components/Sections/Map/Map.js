import React from 'react';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

export default function Contact () {
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <Box ref={ref} align="center" sx={{ zIndex: 1, width: '100%' }}>
            <Grow in={inView} mountOnEnter unmountOnExit timeout={1000}>
                <Paper
                    sx={{
                        width: { xs: '80%', md: '40%' },
                        height: '500px',
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
                                <Typography variant="h4" fontWeight="bold" align="center" color="grey">Ubicación</Typography>
                                <Divider variant="middle" sx={{ marginX: 10 }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ paddingX: { xs: 2, md: 5 }, marginBottom: 2 }}>
                                <iframe
                                    src={ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1519349978535!2d' +
                                        '-76.28729162421062!3d3.5524335099416624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1' +
                                        'm2!1s0x8e3a059075ad9c47%3A0x469da871dfc4dfe1!2sPsic%C3%B3loga%20Sara%20Plaza!5e0!3m2!1ses' +
                                        '-419!2sco!4v1722101432259!5m2!1ses-419!2sco' }
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                >
                                </iframe>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Grow>
        </Box>
    );
}
