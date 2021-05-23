import React, { useEffect, useState } from "react";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Time from './Time.js';
import Forecast from './Forecast.js';
import Pressure from './Pressure.js';
import Card from "../Layout/Card";

const Weather = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    const [loading,setLoading] = useState(false);
    // const [tempo,settempo] = useState(null);
    let res="";
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=110f2b9ec97d037c60903a1418abba54`
            const response = await fetch(url);
            const resJson = await response.json();
            res=response;
            setCity(resJson);
        };
        // Promise()
        // fetchApi().then((resolve,reject)=> (res!==null) ? resolve(setLoading(true)) : reject(setLoading(reject))
        fetchApi().then(()=>setLoading(true))
    }, [search]);

    function sun(pro){
        const hours=new Date(city.sys[pro]*1000).getHours();
        const minutes=new Date(city.sys[pro]*1000).getMinutes();
        let str = hours+":";
        if(minutes<10){
            str += "0"+minutes;
        }
        return str;
    }

    function searchingHandler(event){
        setLoading(false);
        setSearch(event.target.value);
        res="";
    }
    
    return (
        // <div className="body">
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        onBlur={searchingHandler }
                        >
                        </input>
                </div>
                <div style={{textAlign: "center",marginTop: "4rem",fontWeight: "bold"}}>
                    <Time/> 
                </div>
                {!city ? (
                    <p className="errorMsg"> No Data Found </p>
                ) : (
                    <div>
                        <div>
                            <h6 className="location">
                                {search}
                            </h6>
                            <h1 className="temp">
                                {(loading) && city.main.temp}°C
                            </h1>
                            <h3 className="tempmin_max"> Min :{(loading===true) && city.main.temp_min}Cel | Max :{(loading===true) && city.main.temp_max}Cel</h3>
                        <div>
                        {/* <h2>{(loading) && city.weather.map((desc) => {
                            return desc.main
                        }) }</h2><br></br> */}
                        <h3 style={{textAlign: "center"}}>Sky: {(loading) ? city.weather.map((desc) => {
                            return desc.description
                        }) : null}</h3>
                        <h2 style={{textAlign: "center"}}>Wind Speed: {(loading) ? city.wind.speed : null} Km/h</h2>
                        {/* <h2>{(loading) ? city.wind.deg : null}</h2> */}
                        
                        <h3 style={{textAlign: "center"}}>
                            Sunrise: {(loading) ? sun('sunrise') : null} | 
                            Sunset: {(loading) ? sun('sunset') : null}
                        </h3>
                    </div>
                           <div style={{textAlign: "center", fontSize: "20px"}}>
                            <Forecast humidity={city.main.humidity}/> 
                            <br/>
                            <Pressure pressure={city.main.pressure}/> 
                            </div>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>

                    </div>
                )}
                
                </div>
                // </div>

    )
}
export default Weather;