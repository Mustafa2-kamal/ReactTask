import { Toolbar, Grid } from "@mui/material";
import DropMenu from "./DropMenu";
import Search from "./Search";
import styled from "styled-components";
import { Container } from "@mui/system";

const Content = styled.div`

display:flex;
justify-Content:space-between;
align-items:center;
margin-top:40px

`;

function SearchAndDrop() {
    return (
        <Container maxWidth="xl">
            <Content>
                <Search />
                <DropMenu />

            </Content>
        </Container>
        // <Grid container spacing={2}>
        //     <Grid xs={6}>
        //         <Search />
        //     </Grid>
        //     <Grid xs={6}>
        //         <Search />
        //     </Grid>
        // </Grid>
    )
}

export default SearchAndDrop;