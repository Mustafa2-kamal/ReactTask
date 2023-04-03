

import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';


const SearchInput = styled.input`
  font-size: 15px;
  background-color:var(--bg-color);

  padding:16px 10px 16px 15px;
  border:none;
  width:100%;
  border-radius:5px;
  font-family: 'Nunito Sans', sans-serif;
  :placeholder {
    color:var(--font-color);
  }
  
  
`;

const SearchIconStyles = styled(SearchIcon)`

  color: #858585;
  color:var(--font-color);
  
`;


const Content = styled.div`
background-color:var(--bg-color);
padding-left:20px;
display: flex;
align-items: center;
box-shadow: 0px 0px 4px 0px #85858544;
border-radius:5px;

`;

function Search({ setSearch }) {

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (

    <Content>
      <SearchIconStyles />
      <SearchInput id="outlined-search" placeholder="Search for a country..." type="search" onChange={handleChange} />
    </Content>

  )
}

export default Search;