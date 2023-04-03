
import { Container } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import styled from 'styled-components';
import { ThemeContext } from '../App';
import { useContext, useState } from "react";


const ButtonStyles = styled.button`
border:none;
font-size:20px;
font-family: 'Nunito Sans', sans-serif;
background-color:var(--bg-color);
color:var(--font-color);
font-weight: 800;


:hover {
    cursor:pointer
  }
`;

const DarkButton = styled.button`
border:none;
font-size:17px;
font-family: 'Nunito Sans', sans-serif;
background-color:var(--bg-color);
color:var(--font-color);
font-weight: 600;

:hover {
    cursor:pointer
  }
`;



const Content = styled.div`

display:flex;
justify-Content:space-between;
align-items:center;

`;

const Head = styled.div`
background-color:var(--bg-color);
box-shadow: 0px 0px 4px 0px #85858544;
padding:20px 0px;


`;


function Header() {

    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    const handleClick = () => {
        setDarkTheme(!darkTheme);
        localStorage.setItem("DarkTheme", !darkTheme);
    };

    return (

        <Head>
            <Container maxWidth="xl" >
                <Content>
                    <ButtonStyles >
                        Where in the world?
                    </ButtonStyles>

                    <DarkButton onClick={handleClick}>
                        <Content>
                            <DarkModeOutlinedIcon /> <span>&nbsp; Dark Mode</span>
                        </Content>
                    </DarkButton>

                </Content>


            </Container>
        </Head>

    )
}

export default Header;