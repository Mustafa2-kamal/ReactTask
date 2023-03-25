import { Grid, Container } from "@mui/material";
import Favourite from "./Favourite";
import styled from "styled-components";
import ContainerStyles from "./ContainerStyles";
import Cards from "./Cards";

const Content = styled.div`

margin-top:40px

`;


function Countries() {
    return (
        <div>
            <ContainerStyles maxWidth={false}>
                <Content>
                    <Grid container>
                        <Grid item xs={6} lg>
                            <Favourite />
                        </Grid>

                        <Grid item xs={12} lg={9}>
                            <Cards />
                        </Grid>
                    </Grid>
                </Content>
            </ContainerStyles>
        </div>
    )
}

export default Countries;