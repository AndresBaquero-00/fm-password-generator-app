import { SxProps, Theme } from "@mui/material";

export const ButtonStyle: SxProps<Theme> = {
    backgroundColor: 'primary.main',
    color: 'secondary.dark',
    borderRadius: '0',
    padding: '10px 5px',
    fontSize: '20px',
    gap: '15px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary.main',
    '&:hover': {
        backgroundColor: 'transparent',
        color: 'primary.main'
    }
};

export const LevelStrengthStyle: SxProps<Theme> = {
    width: '11px',
    height: '30px',
    border: '2px solid white',
    backgroundColor: 'transparent'
}