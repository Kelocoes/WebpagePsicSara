import React from 'react';
import saraLogoUrl from '../assets/images/sara-logo.png';
import CardMedia from '@mui/material/CardMedia';
import { useState, useEffect } from 'react';
import Fade from '@mui/material/Fade';

export default function SplashScreen() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 800);
    })

    return (
        <Fade in={show} mountOnEnter unmountOnExit>
            <div
                style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <CardMedia
                    style={{ width: '200px' }}
                    component="img"
                    image={saraLogoUrl}
                    alt="Logo"
                />
            </div>
        </Fade>
    )
};
