import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from '@mui/material';
import { ColorModeContext } from "helpers";
import { useToggleColorMode } from "hooks";

//TODO: Cambiar any al tipo de valor que corresponde
export const AppTheme = ({ children }) => {

    const { colorMode, theme } = useToggleColorMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={ theme }>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />

                { children }
            </ThemeProvider>
        </ColorModeContext.Provider>

    )
}