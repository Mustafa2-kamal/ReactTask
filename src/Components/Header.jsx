

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import styled from 'styled-components';

import ContainerStyles from './ContainerStyles';

const ButtonStyles = styled.button`
border:none;
font-size:20px;
font-family: 'Nunito Sans', sans-serif;
background-color:#fff;
font-weight: 800;


:hover {
    cursor:pointer
  }
`;

const DarkButton = styled.button`
border:none;
font-size:17px;
font-family: 'Nunito Sans', sans-serif;
background-color:#fff;
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
background-color:#fff;
box-shadow: 0px 0px 4px 0px #85858544;
padding:20px 0px;

`;


function Header() {
    return (

        <Head>
            <ContainerStyles maxWidth={false} >
                <Content>
                    <ButtonStyles >
                        Where in the world?
                    </ButtonStyles>

                    <DarkButton>
                        <Content>
                            <DarkModeOutlinedIcon /> <span>&nbsp; Dark Mode</span>
                        </Content>
                    </DarkButton>

                </Content>


            </ContainerStyles>
        </Head>

    )
}

export default Header;