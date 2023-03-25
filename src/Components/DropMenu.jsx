
import { Select, MenuItem, FormControl } from "@mui/material";
import styled from "styled-components";

const SelectStyled = styled(Select)`
width:100%;
background-color:#fff;
border:none;
font-family: 'Nunito Sans', sans-serif;
box-shadow: 0px 0px 4px 0px #85858544;
;`

function DropMenu() {
  return (
    <div>

      <SelectStyled value="" displayEmpty >
        <MenuItem value="">Filter by</MenuItem>
        <MenuItem value={10}>No Filter</MenuItem>
        <MenuItem value={20}>Favourites</MenuItem>
        <MenuItem value={30}>Africa</MenuItem>
        <MenuItem value={40}>America</MenuItem>
        <MenuItem value={50}>Asia</MenuItem>
        <MenuItem value={60}>Europe</MenuItem>
        <MenuItem value={70}>Oceania</MenuItem>
      </SelectStyled>


    </div>

  )
}


export default DropMenu;