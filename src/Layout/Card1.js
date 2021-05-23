import 'bootstrap/dist/css/bootstrap.min.css';
import './Card1.css'
const Card1= props=>{
     return(
        <div class="card text-black mb-3 card-width">
        <div class="card-header">{props.title}</div>
        <div class="card-body">
          <h5 class="card-title">{props.value}</h5>
          
        </div>
      </div>
     )
}
export default Card1;