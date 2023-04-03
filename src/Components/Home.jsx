
import Countries from "./Countries";
import Header from "./Header";
import SearchAndFilter from "./SearchAndFilter";
import styled from "styled-components";

import { useContext } from "react";
import { ThemeContext } from "../App";
import HomeContainer from "./HomeContainer";

const Content = styled.div`

background-color:var(--bg-body-color);//#fafafa
padding-bottom: 50px;

`;


function Home() {

    const { darkTheme } = useContext(ThemeContext);
    console.log(darkTheme);
    let theme = darkTheme ? "dark" : "light";
    console.log(theme);

    return (
        <Content className={theme}>
            {/* <Header /> */}
            {/* <SearchAndFilter /> */}
            {/* <Countries /> */}
            <HomeContainer />
        </Content>
    )
}

export default Home;