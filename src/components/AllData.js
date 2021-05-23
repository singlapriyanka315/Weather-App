import React , {useEffect,useState} from 'react';

const AllData =  props => {
    const [city, setCity] = useState(null);
    function sun(pro){
        const hours=new Date(city.sys[pro]*1000).getHours();
        const minutes=new Date(city.sys['sunrise']*1000).getMinutes();
        let str = hours+":";
        if(minutes<10){
            str += "0"+minutes;
        }
        return str;
    }
   const search=props.search;
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=110f2b9ec97d037c60903a1418abba54`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson);
            console.log(resJson);
            console.log(resJson.weather);
        };
        fetchApi();
    }, [search]);
    return (
        <React.Fragment>
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