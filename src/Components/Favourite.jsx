import { List, ListItem, ListItemAvatar, IconButton, ListItemText, Button, CardMedia, Card } from '@mui/material';

import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled from 'styled-components';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const Title = styled.h2`
font-size:18px;
font-family: 'Nunito Sans', sans-serif;
`;

const Content = styled.div`
background-color:white;
padding:10px;
box-shadow: 0px 0px 4px 0px #85858544;
margin-right:40px

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
`;


function Favourite() {
    return (
        <Content>
            <Title>Favourites</Title>
            <List sx={{ height: '600px' }}>
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


                    <ListItemText>
                        <CountryName>Germany</CountryName>
                    </ListItemText>

                    <IconButton size="small">
                        <CloseIconStyles sx={{ fontSize: "20px" }} />
                    </IconButton>

                </ListItem>
            </List>

        </Content>
    )
}

export default Favourite;