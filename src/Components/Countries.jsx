import { Grid, Container } from "@mui/material";
import Favourite from "./Favourite";
import styled from "styled-components";
import Cards from "./Cards";

const Content = styled.div`

margin-top:40px

`;


function Countries({ countries }) {
    return (
        <div>
            <Container maxWidth="xl">
                <Content>
                    <Grid container >
                        <Grid item xs={6} lg>
                            <Favourite />
                        </Grid>

                        <Grid item xs={12} lg={9}>
                            <Cards countries={countries} />
                        </Grid>
                    </Grid>
                </Content>
            </Container>
        </div>
    )
}

export default Countries;