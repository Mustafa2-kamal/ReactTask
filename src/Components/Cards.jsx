
import { Card, CardMedia, CardContent, Typography, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CountryCard from "./CountryCard";



const Title = styled.h2`
font-size:17px;
font-family: 'Nunito Sans', sans-serif;
margin-bottom:15px;
color:var(--font-color);
`;


const Name = styled.span`
font-size:15px;
text-align:left;
font-weight: 600;
display:inline-block;
margin-bottom:5px;
margin-right:4px;
color:var(--font-color);

`;

const Value = styled.span`
font-size:15px;
color:var(--font-color);
`;

const LinkStyles = styled(Link)`
text-decoration: none;
`;

const CardContentStyles = styled(CardContent)`
background-color:var(--bg-color);
`;


function Cards({ countries }) {
    return (
        <div >
            {/* <Grid container spacing={8} >
                <Grid item xs={4}>
                    <CardCC />
                </Grid> */}


            {/* <Grid item xs={4}>
                    <LinkStyles to="/detail">
                        <Card>
                            <CardMedia
                                sx={{ height: 150 }}
                                component="img"
                                image="images/us.svg"
                                alt="CardMedia Image Example"
                            />
                            <CardContentStyles >
                                <Title>United States of America</Title>
                                <div>
                                    <Name>Population:</Name>
                                    <Value>323,947,000</Value>
                                </div>
                                <div>
                                    <Name>Region:</Name>
                                    <Value>Americas</Value>
                                </div>

                                <div>
                                    <Name>Capital:</Name>
                                    <Value>Washington, D.C.</Value>
                                </div>
                            </CardContentStyles>
                        </Card>
                    </LinkStyles>
                </Grid>


                <Grid item md={4}>
                    <LinkStyles to="/detail">
                        <Card>
                            <CardMedia
                                sx={{ height: 150 }}
                                component="img"
                                image="images/br.svg"
                                alt="CardMedia Image Example"
                            />
                            <CardContentStyles >
                                <Title>Barzil</Title>
                                <div>
                                    <Name>Population:</Name>
                                    <Value>206,135,893</Value>
                                </div>
                                <div>
                                    <Name>Region:</Name>
                                    <Value>Americas</Value>
                                </div>

                                <div>
                                    <Name>Capital:</Name>
                                    <Value>Brasilia</Value>
                                </div>
                            </CardContentStyles>
                        </Card>
                    </LinkStyles>
                </Grid>

                <Grid item md={4}>
                    <LinkStyles to="/detail">
                        <Card>
                            <CardMedia
                                sx={{ height: 150 }}
                                component="img"
                                image="images/is.svg"
                                alt="CardMedia Image Example"
                            />
                            <CardContentStyles >
                                <Title>Iceland</Title>
                                <div>
                                    <Name>Population:</Name>
                                    <Value>334,300</Value>
                                </div>
                                <div>
                                    <Name>Region:</Name>
                                    <Value>Europe</Value>
                                </div>

                                <div>
                                    <Name>Capital:</Name>
                                    <Value>Raykjavik</Value>
                                </div>
                            </CardContentStyles>
                        </Card>
                    </LinkStyles>
                </Grid>


                <Grid item md={4}>
                    <LinkStyles to="/detail">
                        <Card>
                            <CardMedia
                                sx={{ height: 150 }}
                                component="img"
                                image="images/af.svg"
                                alt="CardMedia Image Example"
                            />
                            <CardContentStyles >
                                <Title>Afghanistan</Title>
                                <div>
                                    <Name>Population:</Name>
                                    <Value>27,657,145</Value>
                                </div>
                                <div>
                                    <Name>Region:</Name>
                                    <Value>Asia</Value>
                                </div>

                                <div>
                                    <Name>Capital:</Name>
                                    <Value>Kabul</Value>
                                </div>
                            </CardContentStyles>
                        </Card>
                    </LinkStyles>
                </Grid>


                <Grid item md={4}>
                    <LinkStyles to="/detail">
                        <Card>
                            <CardMedia
                                sx={{ height: 150 }}
                                component="img"
                                image="images/ax.svg"
                                alt="CardMedia Image Example"
                            />
                            <CardContentStyles >
                                <Title>Aland Islands</Title>
                                <div>
                                    <Name>Population:</Name>
                                    <Value>28,875</Value>
                                </div>
                                <div>
                                    <Name>Region:</Name>
                                    <Value>Europe</Value>
                                </div>

                                <div>
                                    <Name>Capital:</Name>
                                    <Value>Mariechamn</Value>
                                </div>
                            </CardContentStyles>
                        </Card>
                    </LinkStyles>
                </Grid>
            </Grid> */}

            {/* <CountryContainer /> */}

            {countries.length > 0 && (

                <Grid container spacing={8} >
                    {
                        countries.map(country => {
                            let c = {
                                imageUrl: country.flags.svg,
                                imageAlt: country.flags.alt,
                                title: country.name.common,
                                population: country.population.toLocaleString('en-US'),
                                region: country.region,
                                capital: country.capital,
                                code: country.cca2
                            }
                            return <CountryCard key={country.cca2} country={c} />
                        }

                        )
                    }
                </Grid>

            )}


        </div>

    )

}


export default Cards;