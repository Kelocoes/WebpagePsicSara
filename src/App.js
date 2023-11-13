import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';

import SplashScreen from './components/SplashScreen';
import Landing from './components/Landing/Landing';

function App () {
    // Colores del logo: afa1ec 60408b
    const customTheme = createTheme({
        palette: {
            primary: {
                main: '#60408b'
            },
            secondary: {
                main: '#ffffff'
            }
        },
        typography: {
            fontSize: 20,
            fontFamily: 'Georgia'
        }
    });

    const [showHomePage, setShowHomePage] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowHomePage(false);
        }, 1000);
    }, []);

    return (
        <ThemeProvider theme={customTheme}>
            {showHomePage
                ? <SplashScreen/>
                : <Landing />
            }
        </ThemeProvider>
    );
}

export default App;
