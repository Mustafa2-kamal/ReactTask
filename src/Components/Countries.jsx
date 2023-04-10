import { Grid, Container } from "@mui/material";
import Favourite from "./Favourite";
import styled from "styled-components";
import Cards from "./Cards";

const Content = styled.div`

margin-top:40px

`;


function Countries({ countries, favourites, setFavourites }) {

    const addFavouriteCountry = (countryCode) => {
        let country = countries.find((country) => country.cca2 === countryCode);

        return [...favourites, country]
        //setFavourites((favourites) => [...favourites, country]);
        // localStorage.setItem("Favourites",JSON.stringify([...favourites]))

    }

    return (

        <div>
            <Container maxWidth="xl">
                <Content>
                    <Grid container >
                        <Grid item md={5} lg sx={{ display: { xs: "none", lg: "inline-block" } }}>
                            <Favourite countries={countries} favourites={favourites} setFavourites={setFavourites} />
                        </Grid>

                        <Grid item xs={12} lg={9}>
                            <Cards addFavouriteCountry={(code) => addFavouriteCountry(code)} countries={countries} favourites={favourites} setFavourites={setFavourites} />
                        </Grid>
                    </Grid>
                </Content>
            </Container>
        </div>
    )
}

export default Countries;