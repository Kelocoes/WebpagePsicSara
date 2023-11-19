import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { scroller } from 'react-scroll';

import ImageStart from '../../../assets/images/start2.png';

export default function MainPost () {
    const matches = useMediaQuery('(max-width:600px)');

    const scroll = () => {
        scroller.scrollTo('Therapy', { smooth: 'easeInOutQuad', offset: -100 });
        setTimeout(() => {
            scroller.scrollTo('Therapy', { smooth: true, offset: -100 });
        }, 800);
    };

    return (
        <Box
            align="center"
            sx={{
                width: '90%',
                position: 'relative',
                marginTop: 12,
                borderRadius: '15px',
                zIndex: 1
            }}
        >
            <CardMedia
                component="img"
                image={ImageStart}
                alt="Imagen de inicio"
                style={{ width: matches ? '100%' : '100%', height: 'auto', borderRadius: 50, boxShadow: '0 0 10px 10px rgba(0, 0, 0, 0.3)' }}
            />
            {matches
                ? <Box sx={{ backgroundColor: '#aa86d3', width: '100%', borderRadius: 10, paddingY: 2 }}>
                    <Typography variant="h6" sx={{ fontSize: 20, paddingX: 2 }}>
                        El primer paso hacia tu transformación es reconocer aquello que deseas cambiar.
                    </Typography>
                    <Button variant="outlined" color="secondary" onClick={() => scroll()}>¡Vamos!</Button>
                </Box>
                : <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.35)',
                        transform: 'translate(-50%, -50%)',
                        padding: 3,
                        borderRadius: 5
                    }}
                >
                    <Typography variant="h6">
                        El primer paso hacia tu transformación es
                        <br />
                        reconocer aquello que deseas cambiar.
                    </Typography>
                    <Button variant="outlined" color="secondary" size="small"
                        onClick={() => scroll()}
                    >
                        ¡Vamos!
                    </Button>
                </Box>
            }
        </Box>
    );
}
