import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Divider from '@mui/material/Divider';
import { grey } from '@mui/material/colors';

export default function ServiceDialog2 (props) {
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
                Orientación vocacional
            </DialogTitle>
            <Divider variant="middle"/>
            <DialogContent>
                <DialogContentText variant="body2" color={grey[700]} sx={{ textAlign: { sm: 'justify', xs: 'left' } }}>
                </DialogContentText>
            </DialogContent>
        </Box>
    );
}
