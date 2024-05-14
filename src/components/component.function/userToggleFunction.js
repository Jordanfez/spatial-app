import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from 'react';

const color = {
    color : 'primary'
}

const colorLight = {
    color : 'Light'
}


export const UseToggleFunction = ({ name, icon, handleChangeFunction, isChecked }) => {

    const [alignment, setAlignment] = React.useState("");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleChange}
            sx={{color:"primary"}}
        >
        <ToggleButton
            isChecked
            value={name}
            onClick={handleChangeFunction}
        >
            {name}
        </ToggleButton>

        </ToggleButtonGroup >
    )
}