'use client'

import * as React from 'react';
import { createContext, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const ThemeButton = () => {

    const theme = useTheme();
    const colorMode = React.useContext( ColorModeContext );

    return (        
        <IconButton onClick={ () => colorMode.toggleColorMode } sx={{ color: '#DFE2F5' }} >
            {theme.palette.mode === 'dark' ? <Brightness7Icon sx={{ fontSize: 30 }}/> : <Brightness4Icon sx={{ fontSize: 30 }}/>}
        </IconButton>
    );
    
}
