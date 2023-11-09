import React from 'react';
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';
import Zoom from '@mui/material/Zoom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TherapyImg1 from '../../../assets/images/therapy_1.jpeg';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { grey } from '@mui/material/colors';
import Link from '@mui/material/Link';
import { useEffect, useState } from 'react';
import Grow from '@mui/material/Grow';
import Divider from '@mui/material/Divider';
import TherapyDialog1 from './TherapyDialog1';
import TherapyDialog2 from './TherapyDialog2';
import TherapyDialog3 from './TherapyDialog3';
import Dialog from '@mui/material/Dialog';

export default function Therapy() {
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
        <Box ref={ref} align="center" sx={{ margin: 5, zIndex: 1 }}>
            <Zoom in={inView} mountOnEnter unmountOnExit timeout={1000}>
                <Grid container >
                    <Grid item xs={12} md={1} />
                    <Grid item xs={12} md={10}>
                        <Grid container spacing={10}>
                            <Grid item xs={12} sm={4}>
                                <Grow in={order.length >= 1} timeout={1000}>
                                    <Card sx={{ borderRadius: 5 }} elevation={10}>
                                        <CardMedia
                                            sx={{ maxWidth: '70%', height: 'auto' }}
                                            component="img"
                                            image={TherapyImg1}
                                            alt="Therapy option 1"
                                        />
                                        <CardContent>
                                            <Typography variant="h6" fontWeight="bold" color="#7b38c2b3">Opción 1</Typography>
                                            <Divider sx={{ marginBottom: 1, width: '50%' }} />
                                            <Typography variant="body1" sx={{ fontSize: 15, textAlign: "justify" }} color={grey[700]}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Typography>
                                            <Box align="right">
                                                <Link
                                                    component="button"
                                                    variant="body1"
                                                    sx={{ fontSize: 15 }}
                                                    onClick={handleClickOpen}
                                                >
                                                    Saber más...
                                                </Link>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grow>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Grow in={order.length >= 2} timeout={1000}>
                                    <Card sx={{ borderRadius: 5 }} elevation={10}>
                                        <CardMedia
                                            sx={{ maxWidth: '70%', height: 'auto' }}
                                            component="img"
                                            image={TherapyImg1}
                                            alt="Therapy option 1"
                                        />
                                        <CardContent>
                                            <Typography variant="h6" fontWeight="bold" color="#7b38c2b3">Opción 2</Typography>
                                            <Divider sx={{ marginBottom: 1, width: '50%' }} />
                                            <Typography variant="body1" sx={{ fontSize: 15, textAlign: "justify" }} color={grey[700]}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Typography>
                                            <Box align="right">
                                                <Link
                                                    component="button"
                                                    variant="body1"
                                                    sx={{ fontSize: 15 }}
                                                    onClick={handleClickOpen1}
                                                >
                                                    Saber más...
                                                </Link>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grow>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Grow in={order.length >= 3} timeout={1000}>
                                    <Card sx={{ borderRadius: 5 }} elevation={10}>
                                        <CardMedia
                                            sx={{ maxWidth: '70%', height: 'auto' }}
                                            component="img"
                                            image={TherapyImg1}
                                            alt="Therapy option 1"
                                        />
                                        <CardContent>
                                            <Typography variant="h6" fontWeight="bold" color="#7b38c2b3">Opción 3</Typography>
                                            <Divider sx={{ marginBottom: 1, width: '50%' }} />
                                            <Typography variant="body1" sx={{ fontSize: 15, textAlign: "justify" }} color={grey[700]}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Typography>
                                            <Box align="right">
                                                <Link
                                                    component="button"
                                                    variant="body1"
                                                    sx={{ fontSize: 15 }}
                                                    onClick={handleClickOpen2}
                                                >
                                                    Saber más...
                                                </Link>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grow>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={1} />
                    <Dialog
                        open={open}
                        onClose={handleClose}
                    >
                        <TherapyDialog1 handleClose={handleClose} />
                    </Dialog>
                    <Dialog
                        open={open1}
                        onClose={handleClose}
                    >
                        <TherapyDialog2 handleClose={handleClose} />
                    </Dialog>
                    <Dialog
                        open={open2}
                        onClose={handleClose}
                    >
                        <TherapyDialog3 handleClose={handleClose} />
                    </Dialog>
                </Grid>
            </Zoom>
        </Box>
    )
}