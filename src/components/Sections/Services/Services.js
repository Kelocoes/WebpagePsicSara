import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Zoom from '@mui/material/Zoom';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import React, { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import { useInView } from 'react-intersection-observer';

export default function Services () {
    const [order, setOrder] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            const interval = setInterval(() => {
                if (currentIndex < 4) {
                    setOrder((prevOrder) => [...prevOrder, 0]);
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                } else {
                    clearInterval(interval);
                }
            }, 300);

            return () => {
                clearInterval(interval);
            };
        }
    }, [currentIndex, inView]);

    return (
        <Box ref={ref} align="center" sx={{ zIndex: 1 }}>
            <Zoom direction="up" in={inView} mountOnEnter unmountOnExit timeout={1000}>
                <Paper
                    sx={{
                        width: '90%',
                        backgroundColor: '#aa86d3',
                        padding: 1,
                        color: 'white',
                        borderRadius: 5
                    }}
                    elevation={10}
                >
                    <Typography variant="h4" fontWeight="bold" align="center">Servicios</Typography>
                    <Divider variant="middle" sx={{ marginX: 10 }} />
                    <Grid container spacing={3} justifyContent="center" sx={{ padding: 1 }}>
                        <Grid item sm={12} md={6} lg={3}>
                            <Grow in={order.length >= 1} timeout={1000}>
                                <Box
                                    align="center"
                                    sx={{
                                        backgroundColor: '#aa86d3',
                                        padding: 2,
                                        borderRadius: 3,
                                        border: 3,
                                        borderColor: '#A381CA'
                                    }}
                                >
                                    <Typography sx={{ fontSize: 30, textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)' }}>
                                        Psicoterapia <br /> individual
                                    </Typography>
                                    <PsychologyAltIcon sx={{ fontSize: 75 }} />
                                    <Typography sx={{ fontSize: 18, textAlign: 'justify', paddingX: 2, paddingTop: 1 }}>
                                        Mi servicio de psicoterapia está diseñado para ayudarte a sentirte mejor emocional, mental y psicológicamente.
                                        <br />
                                        ¿Mi secreto? Un enfoque basado en la terapia humanista centrada en la persona.
                                        Esto significa que nuestras sesiones son personalizadas y se adaptan a tus necesidades,
                                        sin juicios, etiquetas ni restricciones.
                                        <br />
                                        ¡Estoy aquí para acompañarte en tu viaje hacia el bienestar!
                                    </Typography>
                                </Box>
                            </Grow>
                        </Grid>
                        <Grid item sm={12} md={6} lg={3}>
                            <Grow in={order.length >= 2} timeout={1000}>
                                <Box
                                    align="center"
                                    sx={{
                                        backgroundColor: '#aa86d3',
                                        padding: 2,
                                        borderRadius: 3,
                                        border: 3,
                                        borderColor: '#A381CA'
                                    }}
                                >
                                    <Typography sx={{ fontSize: 30, textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)' }}>
                                        Orientación <br /> vocacional
                                    </Typography>
                                    <AutoStoriesIcon sx={{ fontSize: 75 }} />
                                    <Typography sx={{ fontSize: 18, textAlign: 'justify', paddingX: 2, paddingTop: 1 }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                                    </Typography>
                                </Box>
                            </Grow>
                        </Grid>
                        <Grid item sm={12} md={6} lg={3}>
                            <Grow in={order.length >= 3} timeout={1000}>
                                <Box
                                    align="center"
                                    sx={{
                                        backgroundColor: '#aa86d3',
                                        padding: 2,
                                        borderRadius: 3,
                                        border: 3,
                                        borderColor: '#A381CA'
                                    }}
                                >
                                    <Typography sx={{ fontSize: 30, textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)' }}>
                                        Escuela <br /> para padres
                                    </Typography>
                                    <Diversity1Icon sx={{ fontSize: 75 }} />
                                    <Typography sx={{ fontSize: 18, textAlign: 'justify', paddingX: 2, paddingTop: 1 }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                                    </Typography>
                                </Box>
                            </Grow>
                        </Grid>
                        <Grid item sm={12} md={6} lg={3}>
                            <Grow in={order.length >= 4} timeout={1000}>
                                <Box
                                    align="center"
                                    sx={{
                                        backgroundColor: '#aa86d3',
                                        padding: 2,
                                        borderRadius: 3,
                                        border: 3,
                                        borderColor: '#A381CA'
                                    }}
                                >
                                    <Typography sx={{ fontSize: 30, textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)' }}>
                                        Capacitación <br /> empresaria
                                        l</Typography>
                                    <ApartmentIcon sx={{ fontSize: 75 }} />
                                    <Typography sx={{ fontSize: 18, textAlign: 'justify', paddingX: 2, paddingTop: 1 }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                                    </Typography>
                                </Box>
                            </Grow>
                        </Grid>
                    </Grid>
                </Paper>
            </Zoom>
        </Box>
    );
}
