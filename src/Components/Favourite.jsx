import { List, ListItem, ListItemAvatar, IconButton, ListItemText, Button, CardMedia, Card } from '@mui/material';

import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled from 'styled-components';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { json } from 'react-router-dom';

const Title = styled.h2`
font-size:18px;
font-family: 'Nunito Sans', sans-serif;
color:var(--font-color);
`;

const Content = styled.div`
background-color:var(--bg-color);
padding:10px;
box-shadow: 0px 0px 4px 0px #85858544;
margin-right:40px;


`;


const CloseIconStyles = styled(CloseRoundedIcon)`
border-radius:50%;
padding:3px;
background-color: #f0f0f0;
font-size:10px;
font-family: 'Nunito Sans', sans-serif;
color:#000;

`;

const CountryName = styled.h3`
font-size:13px;
font-family: 'Nunito Sans', sans-serif;
margin-left:5px;
color:var(--font-color);

`;


function Favourite({ countries, favourites, setFavourites }) {

    //console.log(countries);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => addFavouriteCountry(countries, item.code),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }), [countries])

    const addFavouriteCountry = (countries, countryCode) => {
        let country = countries.find((country) => country.cca2 === countryCode);

        setFavourites((favourites) => [...favourites, country]);
        localStorage.setItem("Favourites", JSON.stringify([...favourites]))

    }



    const removeCountry = (favourites, countrycode) => {

        return favourites.filter((country) => country.cca2 !== countrycode);

    }

    const handleClick = (countrycode) => {
        setFavourites(removeCountry(favourites, countrycode));
    }

    //store in local storage

    return (

        <Content style={{ border: isOver ? '3px solid red' : "0px", marginBottom: "20px" }}>
            <Title>Favourites</Title>

            <div ref={drop}>
                <List sx={{ height: '600px' }}>
                    {
                        favourites.map((country) => {
                            return (

                                <ListItem key={country.cca2}>
                                    <Card>
                                        <CardMedia
                                            sx={{ height: 20, width: 30 }}
                                            component="img"
                                            image={country.flags.svg}
                                            alt={country.flags.alt}
                                        />
                                    </Card>

                                    <ListItemText>
                                        <CountryName>{country.name.common}</CountryName>
                                    </ListItemText>

                                    <IconButton size="small" onClick={() => handleClick(country.cca2)}>
                                        <CloseIconStyles sx={{ fontSize: "20px" }} />
                                    </IconButton>


                                </ListItem>);
                        })}

                    {/* <ListItem>
                        <Card>
                            <CardMedia
                                sx={{ height: 20, width: 30 }}
                                component="img"
                                image="images/us.svg"
                                alt="CardMedia Image Example"
                            />
                        </Card>

                        <ListItemText>
                            <CountryName>Jordan</CountryName>
                        </ListItemText>

                        <IconButton size="small">
                            <CloseIconStyles sx={{ fontSize: "20px" }} />
                        </IconButton>


                    </ListItem>

                    <ListItem>
                        <Card>
                            <CardMedia
                                sx={{ height: 20, width: 30 }}
                                component="img"
                                image="images/us.svg"
                                alt="CardMedia Image Example"
                            />
                        </Card>

                        <ListItemText>
                            <CountryName>United States of America</CountryName>
                        </ListItemText>


                        <IconButton size="small">
                            <CloseIconStyles sx={{ fontSize: "20px" }} />
                        </IconButton>

                    </ListItem>

                    <ListItem>
                        <Card>
                            <CardMedia
                                sx={{ height: 20, width: 30 }}
                                component="img"
                                image="images/de.svg"
                                alt="CardMedia Image Example"
                            />
                        </Card>


                        
                            <CountryName>Germany</CountryName>
                     

                        <IconButton size="small">
                            <CloseIconStyles sx={{ fontSize: "20px" }} />
                        </IconButton>

                    </ListItem>*/}
                </List>
            </div>
        </Content>

    )
}

export default Favourite;