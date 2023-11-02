import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from "@mui/material/IconButton";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fade from "@mui/material/Fade";

export default function Footer() {

    return (
        <Fade in={true} timeout={500}>
            <Box
                sx={{
                    width: "91%",
                    height: "auto",
                    backgroundColor: "secondary.main",
                    borderRadius: '20px',
                    marginBottom: 1,
                    boxShadow: 10
                }}
            >
                <Container maxWidth="lg">
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Box align="center">
                                <Typography align="center" color="primary.main" variant="body1" sx={{ fontSize: '16px', fontWeight: 'bold', marginBottom:-1 }}>
                                    Mis redes sociales
                                </Typography>
                                <IconButton href="https://www.facebook.com/sara.plaza2811" target="_blank">
                                    <FacebookIcon sx={{ color: "lightdark"}} />
                                </IconButton>
                                <IconButton href="https://www.instagram.com/psicosaraplaza/" target="_blank">
                                    <InstagramIcon sx={{ color: "lightdark" }} />
                                </IconButton>
                                <IconButton href="https://www.linkedin.com/in/sara-elizabeth-plaza-plaza-1094a024b/" target="_blank">
                                    <LinkedInIcon sx={{ color: "lightdark" }} />
                                </IconButton>
                                <IconButton href="https://api.whatsapp.com/send/?phone=573182333576" target="_blank">
                                    <WhatsAppIcon sx={{ color: "lightdark" }} />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box>
                                <Typography align="center" color="primary.main" variant="body1" sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Correo electrónico
                                </Typography>
                                <Typography align="center" color="gray" variant="body1" sx={{ fontSize: '15px' }}>
                                    Plazasara694@gmail.com
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box>
                                <Typography align="center" color="primary.main" variant="body1" sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Copyright © 2023
                                </Typography>
                                <Typography align="center" color="gray" variant="body1" sx={{ fontSize: '15px' }}>
                                    Diseñado por <Link href="https://github.com/Kelocoes">@Kelocoes</Link>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fade>
    )
}