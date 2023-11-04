import React from "react";
import MainHeader from "./MainHeader";
import Services from "./Services"
import Footer from "./Footer";
import Box from '@mui/material/Box';
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import TimeLine from "./TimeLine";
import { Element } from 'react-scroll';

export default function Landing() {
    const config = {
        backgroundColor: "#bdb3e9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        fontSize: "calc(10px + 2vmin)",
        textAlign: "center"
    }

    return (
        <>
            <Box sx={config}>
                <MainHeader />
                <h1>1</h1>
                <Element name="AboutMe" />
                <AboutMe />
            </Box>
            <Box sx={{ backgroundColor: "#bdb3e9" }}>
                <TimeLine />
            </Box>
            <Box sx={config}>
                <Element name="Services" />
                <Services />
                <h1>4</h1>
                <h1>5</h1>
                <Element name="Contact" />
                <Contact />
                <Footer />
            </Box>
        </>
    )
}