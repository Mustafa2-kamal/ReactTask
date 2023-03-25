
import Countries from "./Countries";
import Header from "./Header";
import SearchAndFilter from "./SearchAndFilter";
import styled from "styled-components";

const Content = styled.div`

background-color: #fafafa;
padding-bottom: 50px;

`;


function Home() {
    return (
        <Content>
            <Header />
            <SearchAndFilter />
            <Countries />
        </Content>
    )
}

export default Home;