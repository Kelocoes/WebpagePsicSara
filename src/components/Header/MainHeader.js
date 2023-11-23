import * as React from 'react';
import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardMedia from '@mui/material/CardMedia';
import { scroller } from 'react-scroll';
import { styled } from '@mui/system';

import saraLogoUrl from '../../assets/images/sara-logo.png';

const StyledBottomNavigationAction = styled(BottomNavigationAction)`
        h3 {
            transition: color 0.3s ease;
            transition: transform 0.3s ease;
        }

        &:hover {
            h3 {
                color: ${({ theme }) => theme.palette.primary.main};
                transform: scale(1.1);
            }
        }
    `;

export default function MainHeader () {
    const [value, setValue] = useState(0);
    const [expandedAccordion, setExpandedAccordion] = useState(false);
    const matches = useMediaQuery('(max-width:600px)');
    const config = {
        borderRadius: '20px',
        marginTop: 2,
        boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.3)',
        position: 'fixed',
        zIndex: 2
    };

    const sections = {
        1: 'MainPost',
        2: 'AboutMe',
        3: 'Services',
        4: 'Therapy',
        5: 'Contact'
    };

    const scrollAndRoll = (id) => {
        scroller.scrollTo(sections[id], { smooth: 'easeOutCubic', offset: -100 });
        setTimeout(() => {
            scroller.scrollTo(sections[id], { smooth: true, offset: -100 });
        }, 800);
        setExpandedAccordion(true);
    };

    return (
        <Fade in={true} timeout={500}>
            {matches
                ? <Box
                    sx={{
                        ...config
                    }}
                >
                    <Accordion
                        square='false'
                        sx={{ width: '100%', borderRadius: '20px' }}
                        expanded={expandedAccordion}
                        onClick={() => setExpandedAccordion(prevState => !prevState)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <img
                                style={{ width: '50px', marginLeft: 22, marginTop: 3, marginRight: 1 }}
                                src={saraLogoUrl}
                                alt="Logo"
                            />
                        </AccordionSummary>
                        <div>
                            <MenuItem style={{ color: 'grey' }} onClick={() => scrollAndRoll(1)}>Inicio</MenuItem>
                            <MenuItem style={{ color: 'grey' }} onClick={() => scrollAndRoll(2)}>Sobre mí</MenuItem>
                            <MenuItem style={{ color: 'grey' }} onClick={() => scrollAndRoll(3)}>Servicios</MenuItem>
                            <MenuItem style={{ color: 'grey' }} onClick={() => scrollAndRoll(4)}>Terapias</MenuItem>
                            <MenuItem style={{ color: 'grey' }} onClick={() => scrollAndRoll(5)}>Contacto</MenuItem>
                        </div>
                    </Accordion>
                </Box>
                : <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        scroller.scrollTo(sections[newValue], { smooth: 'easeOutCubic', offset: -100 });
                        setTimeout(() => {
                            scroller.scrollTo(sections[newValue], { smooth: true, offset: -100 });
                        }, 800);
                    }}
                    sx={{
                        ...config,
                        width: '90vw',
                        height: '60px'
                    }}
                >
                    <Box
                        sx={{
                            marginLeft: 2,
                            position: { md: 'absolute' },
                            left: '20px'
                        }}
                    >
                        <CardMedia
                            sx={{ width: '55px', marginTop: { xl: '3px', lg: '3px', xs: '3px' } }}
                            component="img"
                            image={saraLogoUrl}
                            alt="About me"
                        />
                    </Box>
                    <StyledBottomNavigationAction label={<h3>Inicio</h3>} sx={{ marginLeft: { lg: 0, md: 20 } }} />
                    <StyledBottomNavigationAction label={<h3>Sobre mí</h3>} />
                    <StyledBottomNavigationAction label={<h3>Servicios</h3>} />
                    <StyledBottomNavigationAction label={<h3>Terapias</h3>} />
                    <StyledBottomNavigationAction label={<h3>Contacto</h3>} />
                </BottomNavigation>
            }
        </Fade>
    );
}
