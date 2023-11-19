import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Divider from '@mui/material/Divider';
import { grey } from '@mui/material/colors';

export default function TherapyDialog2 (props) {
    const { handleClose } = props;
    return (
        <Box sx={{ padding: 2 }}>
            <Box align="right">
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <DialogTitle variant="h6" fontWeight="bold" color="#7b38c2b3"
                sx={{ marginBottom: -2, textAlign: 'center', marginTop: -4 }}
            >
                Paquete mensual
            </DialogTitle>
            <Divider variant="middle"/>
            <DialogContent>
                <DialogContentText variant="body2" color={grey[700]} sx={{ textAlign: { sm: 'justify', xs: 'left' } }}>
                    Este es el primer paso para embarcarte en tu propio camino de sanación, crecimiento y aprendizaje.
                    Las sesiones en paquete mensual, adaptadas a tus necesidades, suelen ser semanales.
                    <br /><br />
                    Incluye un total de 4 sesiones, 1 por semana con una duración de 45 -50 minutos y puedes elegir la
                    modalidad que se ajuste a tu comodidad:
                    <br /><br />
                    &emsp;•   Sesiones presenciales.
                    <br />
                    &emsp;•   Sesiones en línea (videollamada o llamada por meet).
                    <br /><br />
                    ¡Estamos aquí para apoyarte en cada paso de tu camino hacia el bienestar!
                </DialogContentText>
            </DialogContent>
        </Box>
    );
}
