import { useState, Fragment } from "react";
import { Box, Slider, Typography } from "@mui/material";

type Props = {
    length: number;
    changeLength: Function;
}

export const PasswordLength = ({ length, changeLength }: Props) => {

    return (
        <Fragment>
            <Box
                sx={{
                    width: '100%',
                    padding: '10px 10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: '18px'
                    }}
                >
                    Character Length
                </Typography>
                <Typography
                    sx={{
                        color: 'primary.main',
                        fontSize: '35px',
                        fontWeight: '600'
                    }}
                >
                    {length}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    padding: '10px 30px'
                }}
            >
                <Slider
                    min={6}
                    max={20}
                    value={length}
                    onChange={(e, value) => {
                        if (typeof value === 'number') {
                            changeLength(value);
                        }
                    }}
                    sx={{
                        height: '8px',
                        borderRadius: '0',
                        '& .MuiSlider-thumb': {
                            width: '30px',
                            height: '30px',
                            backgroundColor: 'white',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            borderColor: 'white',
                            transitionProperty: 'background-color, border-color',
                            transitionDuration: '.2s',
                            '&:hover, &:active': {
                                boxShadow: 'none',
                                borderColor: 'primary.main',
                                backgroundColor: 'secondary.main'
                            },
                            '&:before': {
                                display: 'none',
                            },
                        }
                    }}
                />
            </Box>
        </Fragment>
    )
}
