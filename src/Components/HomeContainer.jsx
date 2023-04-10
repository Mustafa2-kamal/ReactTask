import { Card, CardMedia, CardContent, Typography, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Draggable from 'react-draggable';
import { useState, useEffect } from "react";
import Carduse from "./CountryCard";
import SearchAndFilter from "./SearchAndFilter";
import Cards from "./Cards";
import Countries from "./Countries";
import Header from "./Header";


const Content = styled.div`

background-color:var(--bg-body-color);//#fafafa
padding-bottom: 50px;

`;

function HomeContainer() {


    const [countries, setCountries] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filterValue, setFilterValue] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem("Favourites")) || []);

    console.log(searchValue);


    console.log(filterValue);

    const filterCountries = (countries, filter) => {
        return countries.filter((country) => !filter || country.region === filter);
    }


    const fetchCountries = async (search) => {

        const url = search ? `https://restcountries.com/v3.1/name/${search}` : 'https://restcountries.com/v3.1/all';


        return fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json()
            }).catch(error => {
                console.log(error);
                return [];
            })

    }

    useEffect(() => {

        // fetchCountries(searchValue).then(data => setCountries(data));
        fetchCountries(searchValue).then(data => setCountries(data));


    }, [searchValue]);

    useEffect(() => {

        setFilteredCountries(filterCountries(countries, filterValue));


    }, [countries, filterValue]);


    return (

        <div>
            <Content>
                <Header />

                <SearchAndFilter search={searchValue} setSearch={setSearchValue} filter={filterValue} setFilter={setFilterValue} />

                <Countries countries={filteredCountries} favourites={favourites} setFavourites={setFavourites} />
               
               
                {/* <Cards countries={countries}/> */}

                {/* {countries.length > 0 && (

                <Grid container spacing={8} >
                    {
                        filteredCountries.map(country => {
                            let c = {
                                imageUrl: country.flags.svg,
                                imageAlt: country.flags.alt,
                                title: country.name.common,
                                population: country.population.toLocaleString('en-US'),
                                region: country.region,
                                capital: country.capital,
                                code: country.cca2
                            }
                            return <Carduse key={country.cca2} country={c} />
                        }

                        )
                    }
                </Grid>

            )} */}
            </Content>

        </div>


        // <LinkStyles to="/detail">
        //     <Card>
        //         <CardMedia
        //             sx={{ height: 150 }}
        //             component="img"
        //             image="images/de.svg"
        //             alt="CardMedia Image Example"
        //         />
        //         <CardContentStyles >
        //             <Title>ggg</Title>
        //             <div>
        //                 <Name>Population:</Name>
        //                 <Value>81,770,900</Value>
        //             </div>
        //             <div>
        //                 <Name>Region:</Name>
        //                 <Value>Europe</Value>
        //             </div>

        //             <div>
        //                 <Name>Capital:</Name>
        //                 <Value>Berlin</Value>
        //             </div>
        //         </CardContentStyles>
        //     </Card>
        // </LinkStyles>


    )
}


export default HomeContainer;