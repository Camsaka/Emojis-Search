import { Box, TextField } from "@mui/material";

export default function SearchInput({handleChange}) {
    function handleOnChange(e: { target: { value: any; }; }){
        handleChange(e.target.value);
    }
    return (
        <Box>
            <TextField onChange={handleOnChange} />
        </Box>);
}