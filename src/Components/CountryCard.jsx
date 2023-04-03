import { Card, CardMedia, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";



const LinkStyles = styled(Link)`
text-decoration: none;
`;


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


const CardContentStyles = styled(CardContent)`
background-color:var(--bg-color);
`;


function CountryCard(props) {

    const { imageUrl, imageAlt, title, population, region, capital, code } = props.country;



    return (

        <Grid item xs={4}>
            <LinkStyles to="/detail" state={code}>
                <Card>
                    <CardMedia
                        sx={{ height: 150 }}
                        component="img"
                        image={imageUrl}
                        alt={imageAlt}
                    />
                    <CardContentStyles >
                        <Title>{title}</Title>
                        <div>
                            <Name>Population:</Name>
                            <Value>{population}</Value>
                        </div>
                        <div>
                            <Name>Region:</Name>
                            <Value>{region}</Value>
                        </div>

                        <div>
                            <Name>Capital:</Name>
                            <Value>{capital}</Value>
                        </div>
                    </CardContentStyles>
                </Card>
            </LinkStyles>
        </Grid>

    )
}


export default CountryCard;