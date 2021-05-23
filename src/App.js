import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/Weather";

import './App.css';
import Card from "./Layout/Card";
import Cardleft from "./Layout/Cardleft";

function App() {
  
  return (
    <div className="rowC">
      {/* <span><Cardleft/></span> */}
    <span><Weather/></span> 
    {/* <span><Card /></span> */}
     </div>
   
     );
}

export default App;
