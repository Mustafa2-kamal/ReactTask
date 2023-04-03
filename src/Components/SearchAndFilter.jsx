import { Grid } from "@mui/material";
import DropMenu from "./DropMenu";
import Search from "./Search";
import styled from "styled-components";
import { Container } from '@mui/material';

const Content = styled.div`


margin-top:40px;

`;

function SearchAndFilter({ search, select }) {
    return (
        <Container maxWidth="xl">
            <Content>
                <Grid container spacing={{ xs: 3 }}>
                    <Grid item xs={12} md={5} >
                        <Search setSearch={search} />
                    </Grid>

                    <Grid item xs={12} md={4} lg={5} ></Grid>

                    <Grid item xs={7} sm={5} md >
                        <DropMenu setSelected={select} />
                    </Grid>
                </Grid>
            </Content>
        </Container>
    )
}

export default SearchAndFilter;