import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Divider from '@mui/material/Divider';
import { grey } from '@mui/material/colors';

export default function ServiceDialog1 (props) {
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
                Psicoterapia individual
            </DialogTitle>
            <Divider variant="middle"/>
            <DialogContent>
                <DialogContentText variant="body2" color={grey[700]} sx={{ textAlign: { sm: 'justify', xs: 'left' } }}>
                    Mis servicios de psicoterapia están diseñados para todas las edades,
                    desde niños hasta adultos mayores. Con un enfoque completamente personalizado
                    te guiaré en el proceso de descubrir tus fortalezas internas y aprender estrategias para superar obstáculos.
                    <br /><br />
                    &emsp;•   Ofrezco un espacio seguro y confidencial donde puedes compartir tus pensamientos y emociones sin juicios.
                    <br /><br />
                    &emsp;•   Te brindaré apoyo emocional y herramientas para manejar el estrés, la ansiedad, la depresión u otros desafíos
                    que puedas estar enfrentando.
                    <br /><br />
                    &emsp;•   Trabajaremos juntos en el desarrollo de habilidades de afrontamiento y en la construcción de una mente más
                    resiliente y fuerte.
                </DialogContentText>
            </DialogContent>
        </Box>
    );
}
