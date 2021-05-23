import React, { useEffect, useState } from "react";
const Time=()=>{
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
    return(
        <div>{date.toLocaleTimeString()} | {date.toLocaleDateString()}</div>
    
    )
}

export default Time;