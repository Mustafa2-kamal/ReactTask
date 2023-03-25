

import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';


const SearchInput = styled.input`
  font-size: 15px;
  background-color:white;
  padding:16px 10px 16px 15px;
  border:none;
  width:100%;
  border-radius:5px;
  font-family: 'Nunito Sans', sans-serif;
  
`;

const SearchIconStyles = styled(SearchIcon)`

  color: #858585
  
`;


const Content = styled.div`
background-color:white;
padding-left:20px;
display: flex;
align-items: center;
box-shadow: 0px 0px 4px 0px #85858544;
border-radius:5px;

`;

function Search() {
    return (

        <Content>
            <SearchIconStyles />
            <SearchInput id="outlined-search" placeholder="Search for a country..." type="search" />
        </Content>

    )
}

export default Search;