import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Divider from '@mui/material/Divider';
import { grey } from '@mui/material/colors';

export default function ServiceDialog3 (props) {
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
                Escuela para padres
            </DialogTitle>
            <Divider variant="middle"/>
            <DialogContent>
                <DialogContentText variant="body2" color={grey[700]} sx={{ textAlign: { sm: 'justify', xs: 'left' } }}>
                    Entendemos que la crianza viene con sus desafíos y aprender cómo hacerlo correctamente puede ser complicado,
                    es por eso que contamos con:
                    <br /><br />
                    &emsp;•   Talleres y sesiones llenos de consejos prácticos que harán que la crianza sea menos complicada y
                    fortalecerán los lazos familiares.
                    <br /><br />
                    &emsp;•   Aprende enfoques positivos para manejar conflictos y aplicar disciplina de una manera que fomente
                    el crecimiento y la conexión emocional en familia.
                </DialogContentText>
            </DialogContent>
        </Box>
    );
}
