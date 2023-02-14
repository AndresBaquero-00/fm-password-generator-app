import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ArrowForwardIos } from "@mui/icons-material";

import { generatePassword } from "./lib";
import { PasswordOptionsI } from "./interfaces";

import { Password } from "./components/Password";
import { PasswordLength } from "./components/PasswordLength";
import { PasswordOptions } from "./components/PasswordOptions";
import { PasswordStrength } from "./components/PasswordStrength";

import { appTheme } from "./themes";
import { ButtonStyle } from "./themes/constants";
import "./styles/global.css";

export const App = () => {
    const [password, setPassword] = useState('P4$5W0rD!');
    const [passwordLevel, setPasswordLevel] = useState(0);
    const [passwordLength, setPasswordLength] = useState(password.length);
    const [passwordOptions, setPasswordOptions] = useState<PasswordOptionsI>({
        uppercaseLetters: false,
        lowercaseLetters: false,
        numbers: false,
        symbols: false
    });

    const generate = () => {
        try {
            const [pass, level] = generatePassword(passwordLength, passwordOptions);
            setPassword(pass);
            setPasswordLevel(level);
        } catch (e) {
            alert('Debe seleccionar por lo menos una opción.');
        }
    }

    return (
        <ThemeProvider theme={appTheme}>
            <Box
                component="main"
                sx={{
                    width: '100%',
                    minHeight: '100vh',
                    backgroundColor: 'secondary.dark'
                }}
            >
                <Box
                    sx={{
                        width: '90%',
                        maxWidth: '550px',
                        backgroundColor: 'transparent',
                        margin: '0 auto',
                        padding: '50px 0'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '20px',
                            color: 'secondary.light',
                            fontWeight: '700',
                            textAlign: 'center',
                            paddingBottom: '20px'
                        }}
                    >
                        Password Generator
                    </Typography>
                    <Box
                        component="section"
                        sx={{
                            width: '100%',
                            padding: '15px 20px',
                            backgroundColor: 'secondary.main',
                            marginBottom: '20px'
                        }}
                    >
                        <Password
                            password={password}
                        />
                    </Box>
                    <Box
                        component="section"
                        sx={{
                            width: '100%',
                            padding: '15px 25px',
                            backgroundColor: 'secondary.main'
                        }}
                    >
                        <PasswordLength
                            length={passwordLength}
                            changeLength={(length: number) => {
                                setPasswordLength(length);
                            }}
                        />
                        <PasswordOptions
                            options={passwordOptions}
                            changeOptions={(options: PasswordOptionsI) => {
                                setPasswordOptions(options);
                            }}
                        />
                        <PasswordStrength
                            level={passwordLevel}
                        />
                        <Button
                            fullWidth
                            disableElevation
                            endIcon={<ArrowForwardIos />}
                            onClick={generate}
                            sx={ButtonStyle}
                        >
                            Generate
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
