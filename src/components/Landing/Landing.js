import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import { Element } from 'react-scroll';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import useMediaQuery from '@mui/material/useMediaQuery';

import MainHeader from '../Header/MainHeader';
import Services from '../Sections/Services/Services';
import Footer from '../Footer/Footer';
import AboutMe from '../Sections/AboutMe/AboutMe';
import Contact from '../Sections/Contact/Contact';
import TimeLine from '../Sections/AboutMe/TimeLine';
import Therapy from '../Sections/Therapy/Therapy';
import MainPost from '../Sections/MainPost/MainPost';

import configParticlesDesktop from './configParticlesDesktop.json';
import configParticlesMobile from './configParticlesMobile.json';

export default function Landing () {
    const matches = useMediaQuery('(max-width:600px)');
    const config = {
        backgroundColor: '#bdb3e9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        fontSize: 'calc(10px + 2vmin)',
        textAlign: 'center'
    };

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <>
            <Box sx={config}>
                <MainHeader />
                <Element name="MainPost" />
                <MainPost />
                <Element name="AboutMe" />
                <AboutMe />
            </Box>
            <Box sx={{ backgroundColor: '#bdb3e9' }}>
                <TimeLine />
            </Box>
            <Box sx={config}>
                <Element name="Services" />
                <Services />
                <Element name="Therapy" />
                <Therapy />
                <Element name="Contact" />
                <Contact />
                <Footer />
            </Box>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={matches ? configParticlesMobile : configParticlesDesktop}
            />
        </>
    );
}
