import React from "react";
import MainHeader from "./MainHeader";
import Services from "./Services"
import Footer from "./Footer";
import Box from '@mui/material/Box';
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import TimeLine from "./TimeLine";

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
                <AboutMe />
            </Box>
            <Box sx={{ backgroundColor: "#bdb3e9" }}>
                <TimeLine />
            </Box>
            <Box sx={config}>
                <Services />
                <h1>4</h1>
                <h1>5</h1>
                <Contact />
                <Footer />
            </Box>
        </>
    )
}