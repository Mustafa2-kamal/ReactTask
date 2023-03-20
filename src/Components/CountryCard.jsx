
import { Card, CardMedia, CardContent, Typography, Container, Grid } from "@mui/material";
import styled from "styled-components";


const Title = styled.h2`
font-size:20px;

`;


const Name = styled.span`
font-size:15px;
text-align:left;
font-weight: 600;

`;

const Value = styled.span`
font-size:15px;

`;

const Dd = styled.div`
text-align:left;
`;


function CountryCard() {
    return (
        <div  >
            <Grid container rowGap={7} columnGap={7} sx={{ backgroundColor: 'red', overflow: 'auto' }}>
                <Grid item md={3}>
                    <Card>
                        <CardMedia
                            sx={{ height: 130 }}
                            image="images/de.svg"
                            title="green iguana"
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
                </Grid>

                <Grid item md={3}>

                    <Card>
                        <CardMedia
                            sx={{ height: 130 }}
                            image="images/us.svg"
                            title="green iguana"
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
                </Grid>

                <Grid item md={3}>

                    <Card>
                        <CardMedia
                            sx={{ height: 130 }}
                            image="images/br.svg"
                            title="green iguana"
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
                </Grid>

                <Grid md={3}>

                    <Card>
                        <CardMedia
                            sx={{ height: 130 }}
                            image="images/is.svg"
                            title="green iguana"
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
                </Grid>


                <Grid md={3}>

                    <Card>
                        <CardMedia
                            sx={{ height: 130 }}
                            image="images/af.svg"
                            title="green iguana"
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
                </Grid>


                <Grid md={3}>

                    <Card>
                        <CardMedia
                            sx={{ height: 130 }}
                            image="images/ax.svg"
                            title="green iguana"
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
                </Grid>
            </Grid>



        </div>

    )

}


export default CountryCard;