import { List, ListItem, ListItemAvatar, IconButton, ListItemText, Button } from '@mui/material';

import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import styled from 'styled-components';

const Title = styled.h2`
font-size:18px
`;

const Content = styled.div`
background-color:white;
padding:10px;
box-shadow: 0px 0px 4px 0px #85858544;

`;

function Favourite() {
    return (
        <Content>
            <Title>Favourites</Title>
            <List sx={{ height: '100vh' }}>
                <ListItem>

                    <ListItemAvatar>

                        <FolderIcon />

                    </ListItemAvatar>


                    <ListItemText
                        primary="Single-line item"
                    />

                    <HighlightOffIcon />

                </ListItem>

                <ListItem>

                    <ListItemAvatar>

                        <FolderIcon />

                    </ListItemAvatar>


                    <ListItemText
                        primary="Single-line item"
                    />

                    <HighlightOffIcon />

                </ListItem>

                <ListItem>

                    <ListItemAvatar>

                        <FolderIcon />

                    </ListItemAvatar>


                    <ListItemText
                        primary="Single-line item"
                    />

                    <HighlightOffIcon />

                </ListItem>
            </List>

        </Content>
    )
}

export default Favourite;