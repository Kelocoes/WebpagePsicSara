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
                        width: '98%'
                    }}
                >
                    <Box>
                        <img
                            style={{ width: '50px', marginLeft: 25, marginTop: 3, marginRight: 1 }}
                            src={saraLogoUrl}
                            alt="Logo"
                        />
                    </Box>
                    <BottomNavigationAction label="Inicio" />
                    <BottomNavigationAction label="Sobre mí" />
                    <BottomNavigationAction label="Servicios" />
                    <BottomNavigationAction label="Agenda cita" />
                    <BottomNavigationAction label="Contacto" />
                </BottomNavigation>
            }
        </Fade>
    );
}