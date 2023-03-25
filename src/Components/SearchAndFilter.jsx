import { Grid} from "@mui/material";
import DropMenu from "./DropMenu";
import Search from "./Search";
import styled from "styled-components";
import { Container } from "@mui/system";
import ContainerStyles from "./ContainerStyles";

const Content = styled.div`


margin-top:40px;

`;

function SearchAndFilter() {
    return (
        <ContainerStyles maxWidth={false}>
            <Content>
                <Grid container spacing={{ xs: 3 }}>
                    <Grid item xs={12} md={5} >
                        <Search />
                    </Grid>

                    <Grid item xs={12} md={4} lg={5} ></Grid>

                    <Grid item xs={7} sm={5} md >
                        <DropMenu />
                    </Grid>
                </Grid>
            </Content>
        </ContainerStyles>
    )
}

export default SearchAndFilter;