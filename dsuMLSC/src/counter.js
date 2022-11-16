import {useState} from "react"
import Button from '@mui/material/Button';

import "./counter.css"


export const Counter = ()=>{

const [counter,setCounter] = useState(100);

function increamentCounter(){
    setCounter(counter+1);
}


function decreamentCounter(){
    setCounter(counter - 1);
} 
return(

    <div className="main">
        <p className="counter" >{counter}</p>
        <Button variant="contained" color="success" className="bttn" onClick={increamentCounter} >Increament</Button>
        <Button variant="contained" color="success" className="bttn" onClick={decreamentCounter} >Decreament</Button>

    </div>
)

}