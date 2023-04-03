

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from '@mui/material';

const LinkStyles = styled(Link)`

background-color:#fff;
box-shadow: 0px 0px 4px 0px #85858544;
border:none;
margin-top:50px;
padding:5px 25px;
border-radius:5px;
text-decoration:none;
color:#000;
display:flex;
align-items:center;
width:fit-content;


`;

function BackButton() {
    return (
        <div>
            <Container maxWidth="xl">

                <LinkStyles to="/home">

                    <KeyboardBackspaceIcon /> <span>&nbsp; Back</span>

                </LinkStyles>
            </Container>
        </div>
    )
}

export default BackButton;