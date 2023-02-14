import { Box, Typography } from "@mui/material";

import { options } from "../constants";
import { LevelStrengthStyle } from "../themes/constants";

type Props = {
    level: number;
}

export const PasswordStrength = ({ level }: Props) => {
    return (
        <Box
            sx={{
                backgroundColor: '#191820',
                padding: '25px 20px',
                margin: '0 0 15px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Typography
                sx={{
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    fontSize: '17px',
                    letterSpacing: '1px',
                    color: 'secondary.light'
                }}
            >
                STRENGTH
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center'
                }}
            >
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: '20px',
                        fontWeight: '600',
                        letterSpacing: '.5px',
                        marginRight: '10px',
                        textAlign: 'center'
                    }}
                >
                    { 
                        level > 0 ? options[level - 1].message : ''
                    }
                </Typography>
                {
                    [0, 0, 0, 0].map((e, i) => (
                        <Box
                            key={i}
                            sx={{
                                ...LevelStrengthStyle,
                                backgroundColor: i < level ? options[level - 1].color : 'transparent',
                                borderColor: i < level ? options[level - 1].color : 'white'
                            }}
                        />
                    ))
                }
            </Box>
        </Box>
    )
}
