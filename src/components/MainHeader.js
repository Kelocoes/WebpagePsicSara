import * as React from 'react';
import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import saraLogoUrl from '../assets/images/sara-logo.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardMedia from '@mui/material/CardMedia';

export default function MainHeader() {
    const [value, setValue] = useState(0);
    const matches = useMediaQuery('(max-width:600px)');
    const config = {
        borderRadius: '20px',
        marginTop: 2,
        boxShadow: 10,
        position: 'fixed',
    }

    return (
        <Fade in={true} timeout={500}>
            {matches ?
                <Box
                    sx={{
                        ...config
                    }}
                >
                    <Accordion square='false' sx={{ width: '100%', borderRadius: '20px' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <img
                                style={{ width: '50px', marginLeft: 25, marginTop: 3, marginRight: 1 }}
                                src={saraLogoUrl}
                                alt="Logo"
                            />
                        </AccordionSummary>
                        <div>
                            <MenuItem style={{ color: "grey" }}>Sobre mí</MenuItem>
                            <MenuItem style={{ color: "grey" }}>Servicios</MenuItem>
                            <MenuItem style={{ color: "grey" }}>Agenda cita</MenuItem>
                            <MenuItem style={{ color: "grey" }}>Contacto</MenuItem>
                            <MenuItem style={{ color: "grey" }}>Inicio</MenuItem>
                        </div>
                    </Accordion>
                </Box>
                :
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{
                        ...config,
                        width: '91%',
                        height: '85px',
                    }}
                >
                    <Box
                        sx={{
                            marginLeft: 2,
                            position: { md: "absolute" },
                            left: "20px",
                        }}
                    >
                        <CardMedia
                            sx={{ width: '75px', marginTop: { xl: '8px', lg:'4px', xs:'4px' }}}
                            component="img"
                            image={saraLogoUrl}
                            alt="About me"
                        />
                    </Box>
                    <BottomNavigationAction label={<h3>Inicio</h3>} sx={{ marginLeft: { lg: 0, md: 20}}}/>
                    <BottomNavigationAction label={<h3>Sobre mí</h3>} />
                    <BottomNavigationAction label={<h3>Servicios</h3>} />
                    <BottomNavigationAction label={<h3>Agenda cita</h3>} />
                    <BottomNavigationAction label={<h3>Contacto</h3>} />
                </BottomNavigation>
            }
        </Fade>
    );
}