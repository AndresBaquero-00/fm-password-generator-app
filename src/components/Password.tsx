import { Box, Typography, IconButton } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import { useState } from "react";

type Props = {
    password: string;
}

export const Password = ({ password }: Props) => {
    const [copied, setCopied] = useState({
        copied: false,
        message: ''
    });

    const copyPassword = () => {
        if (!navigator.clipboard) {
            setCopied({
                copied: false,
                message: 'ERROR'
            });
            setTimeout(() => {
                setCopied({
                    copied: false,
                    message: ''
                });
            }, 1000);
            return;
        }

        navigator.clipboard.writeText(password)
            .then(() => {
                setCopied({
                    copied: true,
                    message: 'COPIED'
                });
                setTimeout(() => {
                    setCopied({
                        copied: false,
                        message: ''
                    });
                }, 1000);
            }).catch(e => {
                setCopied({
                    copied: false,
                    message: 'ERROR'
                });
            });
    }

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'stretch',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flex: '1',
                }}
            >
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: '25px',
                        fontWeight: '600',
                        userSelect: 'none'
                    }}
                >
                    {password}
                </Typography>
                <Typography
                    sx={{
                        color: copied.copied ? 'primary.main' : '#F74B4B',
                        fontSize: '18px',
                        letterSpacing: '1px',
                        fontWeight: '600',
                    }}
                >
                    {copied.message}
                </Typography>
            </Box>
            <Box
                sx={{
                    paddingLeft: '10px'
                }}
            >
                <IconButton
                    color="primary"
                    size="large"
                    onClick={copyPassword}
                    sx={{
                    }}
                >
                    <ContentCopy fontSize="inherit" />
                </IconButton>
            </Box>
        </Box>
    )
}
