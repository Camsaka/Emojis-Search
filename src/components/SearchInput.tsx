import { Box, TextField } from "@mui/material";

export default function SearchInput({handleChange} : {handleChange : CallableFunction}) {
    function handleOnChange(e: { target: { value: string}; }){
        handleChange(e.target.value);
    }
    return (
        <Box>
            <TextField onChange={handleOnChange} label="Rechercher un emoji" />
        </Box>);
}