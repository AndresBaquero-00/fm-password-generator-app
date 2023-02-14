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

export const options = [
    {
        color: '#F74B4B',
        message: 'TOO WEAK!'
    },
    {
        color: '#FB7A56',
        message: 'WEAK'
    },
    {
        color: '#F8CB63',
        message: 'MEDIUM'
    },
    {
        color: '#A3FFAE',
        message: 'STRONG'
    },
];

export const uppercaseLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'
];

export const lowercaseLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
];

export const numbers = [
    '1', '2', '3', '4', '5', '6', '7',
    '8', '9'
];

export const symbols = [
    '%', '&', '?', '!', '[', ']', '^',
    '$', '€', '@', '#', '/', '*', '-'
];