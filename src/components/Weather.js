import React, { useEffect, useState } from "react";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, CardGroup } from "react-bootstrap";
import Time from './Time.js';
import Forecast from './Forecast.js';
import Pressure from './Pressure.js';
import AllData from "./AllData";

const Weather = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    
   

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=110f2b9ec97d037c60903a1418abba54`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);

        };

        fetchApi();
    }, [search])

   

    return (
        <React.Fragment>

            <div className="box" >
                <div className="inputData">

                    <input
                        type="search"
                        className="inputField"
                        onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                {!city ? (
                    <p className="errorMsg"> No Data Found </p>
                ) : (

                    <div>
                        <div className="info">
                            <h2 className="location">
                                {search}
                            </h2>

                            <h1 className="temp">
                                {city.temp}°C
                            </h1>
                            

                            <h3 className="tempmin_max"> Min :{city.temp_min}Cel | Max :{city.temp_max}Cel</h3>
                        
                            <AllData search={search} />
                           
                           <Time/> 
                            <Forecast humidity={city.humidity}/> 
                            <br/>

                            <Pressure pressure={city.pressure}/> 

                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>

                    </div>
                )}
                </div>
                


        </React.Fragment>

    )
}
export default Weather;