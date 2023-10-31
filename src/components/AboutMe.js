import React from 'react';
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AboutMePhoto from '../assets/images/aboutMe.jpg';

export default function AboutMe () {
    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1000}>
            <Paper
                sx={{
                    width: '90%',
                    backgroundColor: 'white',
                    padding: 3,
                    color: 'white',
                    borderRadius: 5
                }}
                elevation={10}
            >
                <Grid container>
                    <Grid item xs={12} sx={{ marginBottom: 2}}>
                        <Typography variant="h4" fontWeight="bold" align="center" color="grey">Sobre mi</Typography>
                        <Divider variant="middle" sx={{ marginX: 10}}/>
                    </Grid>
                    <Grid item xs={12} sx={{ marginBottom: 2}}>
                        <Typography variant="body1" align="center" color="#aa86d1b3" sx={{ fontStyle: "italic", fontWeight: "bold"}} >
                            " La esencia misma del instinto es que se sigue independientemente de la razón " <br/>- Charles Darwin
                        </Typography>
                    </Grid>
                    <Grid item md={12} lg={8} sx={{ paddingX: 4 }}>
                        <Typography color="grey" sx={{ textAlign:"justify" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4} sx={{ justifyContent:"center", display:"flex" }}>
                        <img
                            width={450}
                            src={AboutMePhoto}
                            alt="About me"
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Slide>
    )
}