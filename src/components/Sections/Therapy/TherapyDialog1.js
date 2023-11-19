import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Divider from '@mui/material/Divider';
import { grey } from '@mui/material/colors';

export default function TherapyDialog1 (props) {
    const { handleClose } = props;
    return (
        <Box sx={{ padding: 2 }}>
            <Box align="right" >
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <DialogTitle variant="h6" fontWeight="bold" color="#7b38c2b3"
                sx={{ marginBottom: -2, textAlign: 'center', marginTop: -4 }}
            >
                Sesión personalizada
            </DialogTitle>
            <Divider variant="middle"/>
            <DialogContent>
                <DialogContentText variant="body2" color={grey[700]} sx={{ textAlign: { sm: 'justify', xs: 'left' } }}>
                    Este es el primer paso para embarcarte en tu propio camino de sanación, crecimiento y aprendizaje.
                    Las sesiones individuales, adaptadas a tus necesidades, suelen ser semanales o cada 15 días.
                    <br/><br />
                    En nuestra primera sesión, exploraremos a fondo el motivo de tu consulta, recopilaremos información esencial
                    y obtendremos una visión general de tu situación. Con esta base, desarrollaremos un plan de tratamiento personalizado.
                    <br/><br />
                    Las sesiones de seguimiento son esenciales para continuar el proceso terapéutico diseñado para mejorar la situación que
                    estás atravesando. Con una duración de 40-45 minutos.
                    Elige la modalidad que se ajuste a tu comodidad:
                    <br/><br />
                    &emsp;•   Sesiones presenciales.
                    <br />
                    &emsp;•   Sesiones en línea (videollamada o llamada por meet).
                </DialogContentText>
            </DialogContent>
        </Box>
    );
}
