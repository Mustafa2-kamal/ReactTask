
import { Card, CardMedia, CardContent, Typography, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Title = styled.h2`
font-size:17px;
font-family: 'Nunito Sans', sans-serif;
margin-bottom:15px
`;


const Name = styled.span`
font-size:15px;
text-align:left;
font-weight: 600;
display:inline-block;
margin-bottom:5px;
margin-right:4px

`;

const Value = styled.span`
font-size:15px;

`;

const LinkStyles = styled(Link)`
text-decoration: none;
`;


function Cards() {
    return (
        <div >
            <Grid container spacing={8} >
                <Grid item xs={4}>
                    <LinkStyles to="/detail">
                        <Card>
                            <CardMedia
                                sx={{ height: 150 }}
                                component="img"
                                image="https://www.w3schools.com/html/pic_trulli.jpg"
                                alt="CardMedia Image Example"
                            />
                            <CardContent >
                                <Title>Germany</Title>
                                <div>
                                    <Name>Population:</Name>
                                    <Value>81,770,900</Value>
                                </div>
                                <div>
                                    <Name>Region:</Name>
                                    <Value>Europe</Value>
                                </div>

                                <div>
                                    <Name>Capital:</Name>
                                    <Value>Berlin</Value>
                                </div>
                            </CardContent>
                        </Card>
                    </LinkStyles>
                </Grid>


                <Grid item xs={4}>
                    <LinkStyles to="/detail">
                        <Card>
                            <CardMedia
                                sx={{ height: 150 }}
                                component="img"
                                image="images/us.svg"
                                alt="CardMedia Image Example"
                            />
                            <CardContent >
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
                            </CardContent>
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
                            <CardContent >
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
                            </CardContent>
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
                            <CardContent >
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
                            </CardContent>
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
                            <CardContent >
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
                            </CardContent>
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
                            <CardContent >
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
                            </CardContent>
                        </Card>
                    </LinkStyles>
                </Grid>
            </Grid>



        </div>

    )

}


export default Cards;