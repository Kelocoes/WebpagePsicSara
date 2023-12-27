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
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';

import ServiceDialog1 from './ServiceDialog1';
import ServiceDialog2 from './ServiceDialog2';
import ServiceDialog3 from './ServiceDialog3';

export default function Services () {
    const [order, setOrder] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true });
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpen1(false);
        setOpen2(false);
    };

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
                        <Grid item sm={12} md={6} lg={3}
                            sx={{ transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.025)' } }}
                        >
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
                                        Psicoterapia <br /> Individual
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
                                    <Box align="right">
                                        <Link
                                            component="button"
                                            variant="body1"
                                            color="inherit"
                                            sx={{ fontSize: 15, transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.1)' } }}
                                            onClick={handleClickOpen}
                                        >
                                            Saber más...
                                        </Link>
                                    </Box>
                                </Box>
                            </Grow>
                        </Grid>
                        <Grid item sm={12} md={6} lg={3}
                            sx={{ transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.025)' } }}
                        >
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
                                        Capacitación <br /> Empresarial
                                    </Typography>
                                    <ApartmentIcon sx={{ fontSize: 75 }} />
                                    <Typography sx={{ fontSize: 18, textAlign: 'justify', paddingX: 2, paddingTop: 1 }}>
                                        Ofrezco sesiones personalizadas diseñadas específicamente para las necesidades únicas
                                        de tu empresa. Cada programa es una experiencia adaptada que impulsa el rendimiento.
                                        Descubre cómo a través de estos espacios pueden elevar la motivación y la productividad en tu empresa.
                                    </Typography>
                                    <Box align="right">
                                        <Link
                                            component="button"
                                            variant="body1"
                                            color="inherit"
                                            sx={{ fontSize: 15, transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.1)' } }}
                                            onClick={handleClickOpen1}
                                        >
                                            Saber más...
                                        </Link>
                                    </Box>
                                </Box>
                            </Grow>
                        </Grid>
                        <Grid item sm={12} md={6} lg={3}
                            sx={{ transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.025)' } }}
                        >
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
                                        Escuela <br /> para Padres
                                    </Typography>
                                    <Diversity1Icon sx={{ fontSize: 75 }} />
                                    <Typography sx={{ fontSize: 18, textAlign: 'justify', paddingX: 2, paddingTop: 1 }}>
                                        Tu familia es única, y el apoyo que ofrezco también lo es. Por eso, cuento con estrategias
                                        personalizadas para ayudarte a enfrentar los desafíos específicos que puedan surgir en tu familia.
                                        <br />
                                        Hagamos de la crianza un viaje que todos disfruten juntos.
                                    </Typography>
                                    <Box align="right">
                                        <Link
                                            component="button"
                                            variant="body1"
                                            color="inherit"
                                            sx={{ fontSize: 15, transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.1)' } }}
                                            onClick={handleClickOpen2}
                                        >
                                            Saber más...
                                        </Link>
                                    </Box>
                                </Box>
                            </Grow>
                        </Grid>
                        <Grid item sm={12} md={6} lg={3}
                            sx={{ transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.025)' } }}
                        >
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
                                        Orientación <br /> Vocacional
                                    </Typography>
                                    <AutoStoriesIcon sx={{ fontSize: 75 }} />
                                    <Typography sx={{ fontSize: 18, textAlign: 'justify', paddingX: 2, paddingTop: 1 }}>
                                        Si te encuentras en un momento de indecisión sobre tu carrera o vocación,
                                        puedo ayudarte a explorar tus intereses,
                                        pasiones y habilidades, mediante técnicas de evaluación y conversaciones reflexivas, identificaremos opciones
                                        profesionales que se alineen con tu auténtico ser.
                                        <br />
                                        Te apoyaré en la toma de decisiones para que puedas avanzar en el camino que te motive y llene de satisfacción
                                        mediante la exploración de tus metas, sueños y valores.
                                    </Typography>
                                </Box>
                            </Grow>
                        </Grid>
                    </Grid>
                </Paper>
            </Zoom>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{ sx: { borderRadius: 5 } }}
            >
                <ServiceDialog1 handleClose={handleClose} />
            </Dialog>
            <Dialog
                open={open1}
                onClose={handleClose}
                PaperProps={{ sx: { borderRadius: 5 } }}
            >
                <ServiceDialog2 handleClose={handleClose} />
            </Dialog>
            <Dialog
                open={open2}
                onClose={handleClose}
                PaperProps={{ sx: { borderRadius: 5 } }}
            >
                <ServiceDialog3 handleClose={handleClose} />
            </Dialog>
        </Box>
    );
}
