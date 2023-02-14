import { createTheme } from "@mui/material";

export const appTheme = createTheme({
    typography: {
        fontFamily: [
            'JetBrains Mono', 
            'monospace'
        ].join(',')
    },
    palette: {
        primary: {
            main: '#A3FFAE'
        },
        secondary: {
            main: '#23222A',
            dark: '#08070B',
            light: '#807C92',
        },
    },
    components: {
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '16px'
                }
            },
        },
        MuiCheckbox: {
            defaultProps: {
                className: 'app-checkbox'
            },
            styleOverrides: {
                root: {
                    color: 'white'
                },
            },
        }
    },
});