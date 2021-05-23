import Card1 from './Card1';
import './Card.css';
const Card= props=>{
    return(
       <div className="cards">
      <Card1 title="Humidity" value={props.humidity}/>
      <Card1 title="Pressure" value={props.pressure}/>
      
      </div>

      
    )
}
export default Card;