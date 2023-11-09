import React, { useCallback } from "react";
import MainHeader from "../Header/MainHeader";
import Services from "../Sections/Services/Services"
import Footer from "../Footer/Footer";
import Box from '@mui/material/Box';
import AboutMe from "../Sections/AboutMe/AboutMe";
import Contact from "../Sections/Contact/Contact";
import TimeLine from "../Sections/AboutMe/TimeLine";
import { Element } from 'react-scroll';
import Therapy from "../Sections/Therapy/Therapy";
import MainPost from "../Sections/MainPost/MainPost";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import configParticlesDesktop from './configParticlesDesktop.json';
import configParticlesMobile from './configParticlesMobile.json';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Landing() {
    const matches = useMediaQuery('(max-width:600px)');
    const config = {
        backgroundColor: "#bdb3e9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        fontSize: "calc(10px + 2vmin)",
        textAlign: "center"
    }

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
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
            <Box sx={{ backgroundColor: "#bdb3e9" }}>
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
                loaded={particlesLoaded}
                options={matches ? configParticlesMobile : configParticlesDesktop}
            />
        </>
    )
}