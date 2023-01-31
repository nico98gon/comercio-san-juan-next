'use client'

import { createTheme } from "@mui/material";
import { useMemo, useState } from "react";

export const useToggleColorMode = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light'
                    ? {
                        primary: { main: '#141414' }, // Negro
                        divider: { 
                                    main: '#141414', // Negro
                                    secondary: '#424242', // Gris oscuro
                                },
                                secondary: { 
                                    main: '#A0D624', // Verde lima
                                    // secondary: '#6624D6', // Violeta 
                                },
                        background: {
                            default: '#DFE2F5', //Blanco
                            paper: '#DFE2F5', //Blanco
                        },
                        text: {
                            primary: '#141414', // Negro
                            secondary: '#C9C9C9', // Gris claro
                        },
                        paperContainer: {
                            backgroundImage: `url(${'src/assets/img/background4.jpg'})`
                        }
                    }
                    : {
                        // palette values for dark mode
                        primary: { main: '#141414' }, // Negro
                        divider: { 
                                    main: '#DFE2F5', // Blanco
                                    secondary: '#C9C9C9', // Gris claro
                                },
                        secondary: { 
                                    main: '#A0D624', // Verde lima
                                    secondary: '#6624D6', // Violeta 
                                },
                        background: {
                            default: '#424242', // Gris oscuro 
                            paper: '#424242', // Gris oscuro 
                        },
                        text: {
                            primary: '#C9C9C9', // Gris claro
                            secondary: '#C9C9C9', // Gris claro
                        },
                    }),
                },
            }),
        [mode],
    );

    return {
        colorMode,
        theme,
    }
}