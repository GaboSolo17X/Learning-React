import {useState} from "react";
import PropTypes from "prop-types";


export const CounterApp = ({value}) =>{

    const [counter, setCounter]=useState(0);

    const handleADD =()=>{
        setCounter(counter+1);
    }

    const handleSUB =()=>{
        setCounter(counter-1);
    }

    const handleRESET =()=>{
        setCounter(value);
    }


    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={handleADD}>+1</button>
        <button onClick={handleSUB}>-1</button>
        <button onClick={handleRESET}>Reset</button>

        </>
    )
}

CounterApp.propTypes={
    value:PropTypes.number.isRequired
}