

import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';


const SearchInput = styled.input`
  font-size: 15px;
  background-color:white;
  padding:16px 10px 16px 15px;
  border:none;
  position: 'relative';
  width:100%;
  
`;


const Content = styled.div`
background-color:white;
padding-left:20px;
width:500px;
display: flex;
align-items: center;
box-shadow: 0px 0px 4px 0px #85858544;

`;

function Search() {
    return (
        <div>
            {/* <TextField id="outlined-search" placeholder="Search for a country..." type="search" /> */}
            {/* <SearchIcon sx={{backgroundColor:'red',padding:'10px'}} /> */}
            <Content>
                <SearchIcon />
                <SearchInput id="outlined-search" placeholder="Search for a country..." type="search" />
            </Content>
        </div>
    )
}

export default Search;