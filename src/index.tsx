import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Box } from '@mui/material';

ReactDOM.render(
    <StrictMode>

        <Box>
            <App />
        </Box>
    </StrictMode>,
    document.getElementById('app')
);
