import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';

export default function Services() {
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
        <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1000}>
            <Paper
                sx={{
                    width: '90%',
                    backgroundColor: '#aa86d1b3',
                    padding: 1,
                    color: 'white',
                    marginTop: 5,
                    borderRadius: 5
                }}
                elevation={10}
            >
                <Typography variant="h4" fontWeight="bold" align="center">Servicios</Typography>
                <Divider variant="middle" sx={{ marginX: 10}}/>
                <Grid container spacing={3} justifyContent="center" sx={{ padding: 1 }}>
                    <Grid item sm={12} md={3}>
                        <Grow in={order.length >= 1} timeout={1000}>
                            <Box align="center">
                                <Typography sx={{ fontSize: 35 }}>Psicoterapia <br/> individual</Typography>
                                <PsychologyAltIcon sx={{ fontSize: 75 }} />
                                <Typography sx={{ fontSize: 15, textAlign: "justify", paddingX: 2, paddingTop: 1 }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                                </Typography>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid item sm={12} md={3}>
                        <Grow in={order.length >= 2} timeout={1000}>
                            <Box align="center">
                                <Typography sx={{ fontSize: 35 }}>Orientación <br/> vocacional</Typography>
                                <AutoStoriesIcon sx={{ fontSize: 75 }} />
                                <Typography sx={{ fontSize: 15, textAlign: "justify", paddingX: 2, paddingTop: 1 }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                                </Typography>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid item sm={12} md={3}>
                        <Grow in={order.length >= 3} timeout={1000}>
                            <Box align="center">
                                <Typography sx={{ fontSize: 35 }}>Escuela <br/> para padres</Typography>
                                <Diversity1Icon sx={{ fontSize: 75 }} />
                                <Typography sx={{ fontSize: 15, textAlign: "justify", paddingX: 2, paddingTop: 1 }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                                </Typography>
                            </Box>
                        </Grow>
                    </Grid>
                    <Grid item sm={12} md={3}>
                        <Grow in={order.length >= 4} timeout={1000}>
                            <Box align="center">
                                <Typography sx={{ fontSize: 35 }}>Capacitación <br/> empresarial</Typography>
                                <ApartmentIcon sx={{ fontSize: 75 }} />
                                <Typography sx={{ fontSize: 15, textAlign: "justify", paddingX: 2, paddingTop: 1 }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                                </Typography>
                            </Box>
                        </Grow>
                    </Grid>
                </Grid>
            </Paper>
        </Slide>
    )
}