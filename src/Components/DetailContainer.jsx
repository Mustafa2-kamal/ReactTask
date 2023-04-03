import DetailContent from "./DetailContent";
import { useEffect, useState, Grid } from "react";
import { useLocation } from 'react-router-dom';



function DetailContainer() {


    const [coun, setcoun] = useState(null);
    const [cc, setcc] = useState(null);
    const location = useLocation();


    const fetchData = () => {

        const cdd = location.state;
        fetch('https://restcountries.com/v3.1/alpha/Br')
            .then((res) => res.json())
            .then((data) => {
                setcoun(data[0]);
                console.log(data[0].flags.alt);
                console.log(coun);
                console.log(cdd)
            })
    }

    useEffect(() => {

        fetchData();


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

            {coun != null && (


                <DetailContent count={{
                    imageUrl: coun.flags.svg,
                    imageAlt: coun.flags.alt,
                    title: coun.name.common,
                    nativeName: Object.values(coun.name.nativeName)[0].common,
                    population: coun.population.toLocaleString('en-US'),
                    region: coun.region,
                    subRegion: coun.subregion,
                    capital: coun.capital,
                    toplevelDomain: coun.tld,
                    currenies: Object.values(coun.currencies)[0].name,
                    languages: Object.values(coun.languages).join(',')
                }} />



            )}

        </div>



    )
}


export default DetailContainer;