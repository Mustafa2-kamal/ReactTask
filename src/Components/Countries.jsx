import { Grid, Container } from "@mui/material";
import CountryCard from "./CountryCard";
import Favourite from "./Favourite";
import styled from "styled-components";

const Content = styled.div`

// display:flex;
// justify-Content:space-between;
// align-items:start;
margin-top:40px

`;


function Countries() {
    return (
        <div>
            <Container maxWidth="xl">
                <Content>
                    <Grid container>
                        <Grid item xs={2}>
                            <Favourite />
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={9}>
                            <CountryCard />
                        </Grid>
                    </Grid>
                    {/* <Favourite />
                    <CountryCard /> */}
                </Content>
            </Container>
        </div>
    )
}

export default Countries;