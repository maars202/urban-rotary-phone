import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import QrCodeIcon from "@mui/icons-material/QrCode";
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {
    const navigate = useNavigate();

    const handleQrClick = () => {
                // go to qrcode:
        // navigate("/qrcode");
        return
    }

    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                    <Grid item xs={3} />
                    <Grid item xs={6}>
                        <Box mt={3} textAlign='center'>
                            <Typography variant="h6" color='text.primary'> 
                                Pokemaniac.sol
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box mt={2.5} mr={2} display='flex' justifyContent='flex-end'>
                            <IconButton onClick={handleQrClick}>
                                <QrCodeIcon sx={{ color: 'text.secondary' }} />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default AppHeader;