
import { AppBar, Link, Container, Toolbar, IconButton, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Box } from '@mui/system';
import styled from 'styled-components';

const ButtonStyled = styled.button`
border:none;
font-size:20px;
background-color:#fff;
font-weight: 600;
:hover {
    cursor:pointer
  }
`;


const Content = styled.div`

display:flex;
justify-Content:space-between;
align-items:start;

`;

const Head = styled.div`
background-color:#fff;
box-shadow: 0px 0px 4px 0px #85858544;
padding:20px 0px;

`;

const ToolbarStyled = styled(Toolbar)`
background-color:#fff;
box-shadow: 0px 0px 4px 0px #85858544;

`;




function Header() {
    return (

       <Head>
            <Container maxWidth="xl">

                {/* <Grid container justifyContent="flex-start" alignItems={'center'}>
                        <Grid item xs={6}>

                            // {/* <Button variant="contained" >
                            //     Where in the world?
                            // </Button> 
                            <ButtonStyled >
                                Where in the world?
                            </ButtonStyled>

                        </Grid>

                        <Grid item xs={6}>
                            <ButtonStyled>
                                <DarkModeOutlinedIcon /> Dark Mode
                            </ButtonStyled>
                        </Grid>
                    </Grid> */}
                <Content>
                    <ButtonStyled >
                        Where in the world?
                    </ButtonStyled>

                    <ButtonStyled>
                        <DarkModeOutlinedIcon /> Dark Mode
                    </ButtonStyled>
                </Content>


            </Container>
            </Head>

    )
}

export default Header;