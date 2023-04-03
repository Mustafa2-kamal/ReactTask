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




function HomeContainer() {


    const [countries, setCountries] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [selected, setSelected] = useState("");

    console.log(searchValue);

    console.log(selected);

    const filterCountries = () => {
        setCountries(countries.filter((country) => country.region === selected));
    }


    const fetchCountries = () => {

        const url = searchValue ? `https://restcountries.com/v3.1/name/${searchValue}` : 'https://restcountries.com/v3.1/all';
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
                console.log(data)
            })
    }

    useEffect(() => {

        fetchCountries();


    }, [searchValue]);

    useEffect(() => {

        filterCountries();

    }, [selected]);


    return (

        <div>
            <Header />

            <SearchAndFilter search={setSearchValue} select={setSelected} />

            <Countries countries={countries} />
            {/* <Cards countries={countries}/> */}

            {countries.length > 0 && (

                <Grid container spacing={8} >
                    {
                        countries.map(country => {
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

            )}

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