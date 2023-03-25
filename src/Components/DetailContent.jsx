
import { Card, CardMedia, Grid } from "@mui/material";
import styled from "styled-components";
import ContainerStyles from "./ContainerStyles";


const Title = styled.h2`
font-size:20px;
font-family: 'Nunito Sans', sans-serif;
margin-bottom:15px
`;


const Name = styled.span`
font-size:15px;
text-align:left;
font-weight: 600;
display:inline-block;
margin-bottom:5px;
color:#000;
margin-right:5px;

`;

const Value = styled.span`
font-size:15px;

`;


const ButtonStyles = styled.button`
font-size:14px;
padding:7px 20px;
background-color:#fff;
box-shadow: 0px 0px 4px 0px #85858544;
border:none;
font-family: 'Nunito Sans', sans-serif;
margin-left:5px;
border-radius:2px;

`;

const RightContent = styled.div`
padding-left: 39px;
`;


const BorderContent = styled.div`
font-family: 'Nunito Sans', sans-serif;
margin-top:40px;
`;

const ContentStyles = styled.div`
padding:80px 0px;
margin-top:50px;
`;

const Image = styled(Card)`
margin-top:50px;

`;

function DetailContent() {
    return (
        <div>
            <ContainerStyles maxWidth={false}>

                <Grid container >

                    <Grid item xs={12} lg>
                        <Image>
                            <CardMedia
                                component="img"
                                height="400"
                                image="https://www.w3schools.com/html/pic_trulli.jpg"
                                alt="Belgium"
                            />

                        </Image>
                    </Grid>

                    <Grid item xs={1}></Grid>

                    <Grid item xs={12} lg>
                        <ContentStyles>
                            <div>
                                <Title>Belgium</Title>
                                <Grid container>

                                    <Grid item xs={12} md>
                                        <div>
                                            <div>
                                                <Name>Native Name:</Name>
                                                <Value>Belgie</Value>
                                            </div>
                                            <div>
                                                <Name>Population:</Name>
                                                <Value>11,319,511</Value>
                                            </div>
                                            <div>
                                                <Name>Region:</Name>
                                                <Value>Europe</Value>
                                            </div>
                                            <div>
                                                <Name>Sub Region:</Name>
                                                <Value>Western Europe</Value>
                                            </div>

                                            <div>
                                                <Name>Capital:</Name>
                                                <Value>Brussels</Value>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs>
                                        <RightContent>
                                            <div>
                                                <Name>Top level Domain:</Name>
                                                <Value>.be</Value>
                                            </div>

                                            <div>
                                                <Name>Currenies:</Name>
                                                <Value>Euro</Value>
                                            </div>

                                            <div>
                                                <Name>Languages:</Name>
                                                <Value>Dutch, French, German</Value>
                                            </div>
                                        </RightContent>
                                    </Grid>

                                </Grid>

                                <BorderContent>
                                    <Name>Border Countries:</Name>
                                    <ButtonStyles>France</ButtonStyles>
                                    <ButtonStyles>Germany</ButtonStyles>
                                    <ButtonStyles>Netherlands</ButtonStyles>
                                </BorderContent>

                            </div>
                        </ContentStyles>
                    </Grid>

                </Grid>

            </ContainerStyles>
        </div>
    )
}

export default DetailContent;