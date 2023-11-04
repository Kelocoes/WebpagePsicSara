import React from 'react';
import Zoom from '@mui/material/Zoom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AboutMePhoto from '../assets/images/aboutMe.jpg';
import { useEffect, useState } from 'react';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

export default function AboutMe() {
    const [order, setOrder] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
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
    }, [currentIndex]);

    return (
        <Zoom direction="up" in={true} mountOnEnter unmountOnExit timeout={1000}>
            <Paper
                sx={{
                    width: '90%',
                    backgroundColor: '#white',
                    padding: 1,
                    color: 'white',
                    borderRadius: 5
                }}
                elevation={10}
            >
                <Grid container sx={{ paddingBottom: 2 }}>
                    <Grid item xs={12} sx={{ marginBottom: 2 }}>
                        <Grow in={order.length >= 1} timeout={1000}>
                            <Box>
                                <Typography variant="h4" fontWeight="bold" align="center" color="grey">Sobre mi</Typography>
                                <Divider variant="middle" sx={{ marginX: 10 }} />
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid item xs={12} sx={{ marginBottom: 2 }}>
                        <Grow in={order.length >= 2} timeout={1000}>
                            <Box>
                                <Typography variant="body1" align="center" color="#7b38c2b3" sx={{ fontStyle: "italic", fontWeight: "bold", fontSize: 25, paddingX: {lg: 40, sm:0} }} >
                                    "Cuando ya no somos capaces de cambiar una situación, nos encontramos ante el desafío de cambiarnos a nosotros mismos" <br />- Viktor Frankl
                                </Typography>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid item md={12} lg={8} sx={{ paddingX: 4, paddingTop: 2 }}>
                        <Grow in={order.length >= 3} timeout={1000}>
                            <Box>
                                <Typography color="grey" sx={{ textAlign: { sm:"justify", xs: "left"}, fontSize: { xs: 18, sm: 25 }}}>
                                ¡Hola! Soy Sara Elizabeth Plaza, psicóloga egresada de la Universidad Pontificia Bolivariana. 
                                Utilizo un enfoque humanista centrado en la persona en los procesos de psicoterapia, ya que se basa en la empatía, 
                                comprensión y respeto hacia cada individuo.
                                <br /><br />
                                Me fascina la lectura, las series y conocer las distintas culturas alrededor del mundo. Amo a los animales, 
                                soy fanática del chocolate y adoro los días lluviosos. Creo firmemente que los momentos difíciles llegan a tu vida 
                                como procesos para hacerte más fuerte y ayudarte a alcanzar tu mejor versión. Mi amor por la psicología me ha enseñado 
                                lo hermoso que puede ser el proceso de sanación y ha sido mi herramienta para encontrar mi propósito y vocación.
                                Mi pasión es ayudarte a construir una vida llena de bienestar emocional y mental, ¡porque te lo mereces! Así que espero 
                                que juntos podamos explorar el poder de la psicología para superar obstáculos, descubrir tu verdadero potencial y alcanzar una vida plena y significativa.
                                <br /><br />
                                Entonces, si estás listo para embarcarte en un viaje de autodescubrimiento y crecimiento personal, te invito a 
                                ponerte en contacto conmigo y empezar, desde ya, a cuidar de ti mismo desde el interior. ¿Te animas?
                                </Typography>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4} sx={{ justifyContent: "center", display: "flex", padding: 3 }}>
                        <Grow in={order.length >= 4} timeout={1000}>
                            <CardMedia
                                sx={{ maxWidth: '100%', height: 'auto'}}
                                component="img"
                                image={AboutMePhoto}
                                alt="About me"
                            />
                        </Grow>
                    </Grid>
                </Grid>
            </Paper>
        </Zoom>
    )
}