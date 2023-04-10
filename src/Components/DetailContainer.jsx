import DetailContent from "./DetailContent";
import { useEffect, useState, Grid } from "react";
import { useLocation } from 'react-router-dom';
import Header from "./Header";
import BackButton from "./BackButton";
import styled from "styled-components";


const Content = styled.div`

background-color:var(--bg-body-color);//#fafafa
padding-bottom: 50px;


`;

function DetailContainer() {


    const [country, setCountry] = useState(null);
    const [cc, setcc] = useState(null);
    const [borders, setBorders] = useState([]);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const code = params.get('countryCode');


    const fetchData = async (countryCode) => {

        return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            .then((res) => res.json())

    }

    const fetchBorders = async (borders) => {
        let fetchRequests = [];
        borders && borders.forEach((border) => {
            const fetchReq = fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((res) => res.json());
            fetchRequests.push(fetchReq);

        })
        return Promise.all(fetchRequests)

    }
    // console.log(country.borders);


    useEffect(() => {

        fetchData(code).then(data => {
            setCountry(data[0]);
            console.log(data[0].borders)
            fetchBorders(data[0].borders).then(data => setBorders(data));
        });
        // fetchBorders(country.borders).then(data =>setBorders(data));
        //console.log(country.borders);

    }, []);



    // let c = {
    //     imageUrl: coun.flags.svg,
    //     imageAlt: coun.flags.alt,
    //     title: coun.name.common,
    //     nativeName:Object.values(coun.name.nativeName)[0].common,
    //     population: coun.population.toLocaleString('en-US'),
    //     region: coun.region,
    //     subRegion:coun.subregion,
    //     capital: coun.capital,
    //     toplevelDomain:coun.tld,
    //     currenies:Object.values(coun.currencies)[0].name,
    //     languages:Object.values(coun.languages).join(',')
    // }


    return (

        <div>

            <Content>
                <Header />
                <BackButton />


                {country != null && (


                    <DetailContent count={{
                        imageUrl: country.flags.svg,
                        imageAlt: country.flags.alt,
                        title: country.name.common,
                        nativeName: Object.values(country.name.nativeName)[0].common,
                        population: country.population.toLocaleString('en-US'),
                        region: country.region,
                        subRegion: country.subregion,
                        capital: country.capital,
                        toplevelDomain: country.tld,
                        currenies: Object.values(country.currencies)[0].name,
                        languages: Object.values(country.languages).join(','),
                        borders: borders
                    }} />



                )}

            </Content>
        </div>



    )
}


export default DetailContainer;