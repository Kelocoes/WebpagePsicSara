import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ApartmentIcon from '@mui/icons-material/Apartment';

export default function Services() {
    return (
        <Box
            sx={{
                width: '90%'
            }}
        >
            <Typography variant="h4" fontWeight="bold" align="center">Servicios</Typography>
            <Grid container spacing={1} justifyContent="center">
                <Grid item sx={12} sm={4}>
                    <Box  align="center">
                        <Typography sx={{ fontSize: 35}}>Psicoterapia</Typography>
                        <AirlineSeatFlatIcon sx={{ fontSize: 100}}/>
                        <Typography> Lorem ipsum</Typography>
                    </Box>
                </Grid>
                <Grid item sx={12} sm={4}>
                    <Box align="center">
                        <Typography sx={{ fontSize: 35}}>Orientación vocacional</Typography>
                        <AirportShuttleIcon sx={{ fontSize: 100}}/>
                        <Typography> Lorem ipsum</Typography>
                    </Box>
                </Grid>
                <Grid item sx={12} sm={4}>
                    <Box align="center">
                        <Typography sx={{ fontSize: 35}}>Habitos para la salud mental</Typography>
                        <ApartmentIcon sx={{ fontSize: 100}}/>
                        <Typography> Lorem ipsum</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}