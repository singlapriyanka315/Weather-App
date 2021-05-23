import React , {useEffect,useState} from 'react';
import Weather from './Weather';

const AllData =  props => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    function sun(pro){
        const hours=new Date(city.sys[pro]*1000).getHours();
        const minutes=new Date(city.sys['sunrise']*1000).getMinutes();
        let str = hours+":";
        if(minutes<10){
            str += "0"+minutes;
        }
        return str;
    }
    function searchHandler(data) {
        setSearch(data);
    }
//    const search=props.search;
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=110f2b9ec97d037c60903a1418abba54`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson);
        };
        fetchApi();
    }, [search]);
    return (
        <React.Fragment>
            <Weather search={search} searchHandler={(data) => searchHandler(data)} city={city} />
            <h2>{(city!==null) ? city.weather.map((desc) => {
                return desc.main
            }) : null}</h2><br></br>
            <h2>{(city!==null) ? city.weather.map((desc) => {
                return desc.description
            }) : null}</h2>
            <h2>{(city!==null) ? city.wind.speed : null}</h2><br></br>
            <h2>{(city!==null) ? city.wind.deg : null}</h2>
            <h2>
                Sunrise: {(city!==null) ? sun('sunrise') : null}<br></br>
                Sunset: {(city!==null) ? sun('sunset') : null}<br></br>
            </h2>
        </React.Fragment>
    )
}
export default AllData;