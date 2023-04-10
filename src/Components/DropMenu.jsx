
import { Select, MenuItem, FormControl } from "@mui/material";
import styled from "styled-components";

const SelectStyled = styled(Select)`
width:100%;
background-color:var(--bg-color);
color:red;
border:none;
font-family: 'Nunito Sans', sans-serif;
box-shadow: 0px 0px 4px 0px #85858544;

& .MuiOutlinedInput-input {
  color: var(--font-color);
}

& .MuiSelect-icon{
  color: var(--font-color);
}

& .MuiOutlinedInput-notchedOutline{
  border:none
}
;`

function DropMenu({ filter, setFilter }) {


  const handleChange = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };


  return (
    <div>

      <SelectStyled value={filter} displayEmpty label="Age" onChange={handleChange}>
        <MenuItem value="">Filter by</MenuItem>
        <MenuItem value="">No Filter</MenuItem>
        <MenuItem value="Favourites">Favourites</MenuItem>
        <MenuItem value="Africa">Africa</MenuItem>
        <MenuItem value="America">America</MenuItem>
        <MenuItem value="Asia">Asia</MenuItem>
        <MenuItem value="Europe">Europe</MenuItem>
        <MenuItem value="Oceania">Oceania</MenuItem>
      </SelectStyled>


    </div>

  )
}


export default DropMenu;