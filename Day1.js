import React from "react";
import './Day1App.css';

const alertBox = () =>{
    alert('Message from Javascript alert!');
}

const consoleLog = () => {
    console.log('Message to developer');
}

const Array = ['a', 'e', 'i', 'o']

const output = () => {
    alert('check the console output!');
    Array.push('u');
    console.log(Array);
}

export default function Day1(){
    return(
        <div className="box">
        
            <br /> <br />
            <button onClick={alertBox}>Click to get alert</button>   
            <br /> <br />
            <button onClick={consoleLog}>click to log</button>
            <br /> <br />
            <button onClick={output}>click to push</button>
            <br /> <br />

        </div>
    )
}