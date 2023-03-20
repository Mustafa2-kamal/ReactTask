
import { Button, Container } from "@mui/material";
import Header from "./Header";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import styled from "styled-components";


const ButtonStyled = styled.button`
background-color:#fff;
box-shadow: 0px 0px 4px 0px #85858544;
align-items:center;
border:none

`;

function Detail() {
    return (
        <div>
            <Header />
            <Container maxWidth="xl">
                <ButtonStyled ><KeyboardBackspaceIcon />Back</ButtonStyled>
            </Container>
        </div>
    )
}

export default Detail;