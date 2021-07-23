import React, { useEffect, useState } from 'react';
import './css/style.css';
import StreetviewIcon from '@material-ui/icons/Streetview';

const Tempapp = () => {
    const [city, setCity] = useState();
    const [search, setSearch] = useState("Baghpat");
    const [response, setResponse] = useState("Baghpat");

    useEffect(()=>{
        const fetchApi = async () => {
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ec8c2e838ced4182857b409eb7b0d1e4`;
            const res = await fetch(URL);
            const response = await res.json();
            console.log(response);
            setCity(response.main);
        }
        fetchApi();
    },[search]);

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" onChange={(event) => setSearch(event.target.value)}  
                    placeholder="Search Here.." className="inputField" value={search}/>
                </div>
                {!city ? <p className="errorMsg">No Data found!!</p> : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                            <StreetviewIcon/> <i className="fas fa-street-view">{search}</i>
                            </h2>
                            <h1 className="temp">
                                {city.temp}°C
                            </h1>
                            <h3 className="tempmin_max">{city.temp_min}°C | {city.temp_max}°C</h3>
                        </div>
                        <div className="wave-btn">
                            <a href="#" className=""></a>
                        </div>
                    </div>
                )
                }
            </div>
        </>
    );
}

export default Tempapp;