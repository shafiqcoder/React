import React,{useState} from 'react';
import {Message} from './message.js'
import './App.css';
//Hook component should be functional. cant use in classess.
// useState variable value will not save permanently. if you refresh the browser all variable will update to initial value.
export default function App() {
  let [count, setCount]=useState (3);
  let [isMorning,setMorning]=useState(false);
  return (
  <div className={`box ${isMorning ? 'dayLight':''}`}>
    <h1>Good {isMorning ? 'Morning':'Night' }</h1>
    <Message counter={count}/>
    <button onClick={()=> setCount(count+1)}>Update Counter</button>
    <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
  </div>)
};