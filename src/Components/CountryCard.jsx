import { Card, CardMedia, CardContent, CardActions, Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Draggable from 'react-draggable';
import { useDrag } from "react-dnd";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Block } from "@mui/icons-material";



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

const CardActionsStyles = styled(CardActions)`

display: flex;
justify-content: flex-end;

`;




function CountryCard(props) {

    const { imageUrl, imageAlt, title, population, region, capital, code } = props.country;
    // const{favourites}=props.favourites ;
    // const{setFavourites}=props.setFavourites;
    // const{countries}=props.countries;
    // const{addFavouriteCountry}=props.addFavouriteCountry;

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "card",
        item: { code },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));



    // const handleClick=(countryCode)=>{
    //     setFavourites(addFavouriteCountry(countryCode));
    // }


    return (

        <Grid item xs={11} sm={6} md={4}>
            <LinkStyles to={`/detail?countryCode=${code}`}>
                <Card sx={{ opacity: isDragging ? 0.5 : 1 }} ref={drag}>
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
                    <CardActionsStyles >
                        <IconButton sx={{ display: { xs: "Block", lg: "none" } }} >
                            <StarRoundedIcon />
                        </IconButton>
                    </CardActionsStyles>
                </Card>
            </LinkStyles>
        </Grid>

    )
}


export default CountryCard;