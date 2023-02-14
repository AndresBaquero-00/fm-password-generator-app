import { Box, FormControlLabel, Checkbox } from "@mui/material";

import { PasswordOptionsI } from "../interfaces";

type Props = {
    options: PasswordOptionsI;
    changeOptions: Function;
}

export const PasswordOptions = ({ options, changeOptions }: Props) => {

    const onChange = ({checked, property}: {
        checked: boolean;
        property: string;
    }) => {
        changeOptions({
            ...options,
            [property]: checked
        });
    }

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px 5px'
            }}
        >
            <FormControlLabel
                label="Include Uppercase Letters"
                control={
                    <Checkbox
                        checked={options.uppercaseLetters}
                        onChange={({ target }) => {
                            onChange({
                                checked:  target.checked,
                                property: 'uppercaseLetters'
                            });
                        }}
                    />
                }
            />
            <FormControlLabel
                label="Include Lowercase Letters"
                control={
                    <Checkbox
                        checked={options.lowercaseLetters}
                        onChange={({ target }) => {
                            onChange({
                                checked:  target.checked,
                                property: 'lowercaseLetters'
                            });
                        }}
                    />
                }
            />
            <FormControlLabel
                label="Include Numbers"
                control={
                    <Checkbox
                        checked={options.numbers}
                        onChange={({ target }) => {
                            onChange({
                                checked:  target.checked,
                                property: 'numbers'
                            });
                        }}
                    />
                }
            />
            <FormControlLabel
                label="Include Symbols"
                control={
                    <Checkbox
                        checked={options.symbols}
                        onChange={({ target }) => {
                            onChange({
                                checked:  target.checked,
                                property: 'symbols'
                            });
                        }}
                    />
                }
            />
        </Box>
    )
}
