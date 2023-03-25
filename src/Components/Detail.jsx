
import { Button, Container } from "@mui/material";
import Header from "./Header";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ContainerStyles from "./ContainerStyles";
import { Link } from "react-router-dom";

import styled from "styled-components";
import DetailContent from "./DetailContent";
import BackButton from "./BackButton";


const ButtonStyled = styled.button`
background-color:#fff;
box-shadow: 0px 0px 4px 0px #85858544;
align-items:center;
border:none;
margin-top:50px;
padding:5px 25px;
border-radius:5px;
:hover {
    cursor:pointer
  }
`;



const Content = styled.div`

background-color:#fff;
padding-bottom: 50px;


`;

function Detail() {
    return (
        <Content>
            <Header />
            <BackButton />
            <DetailContent />
        </Content>
    )
}

export default Detail;