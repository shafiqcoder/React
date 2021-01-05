import React, { useContext } from 'react';
import countercontext from './countercontext';
const Child = () => {
    let counterValue=useContext(countercontext)
    //context was created in counterontext
    // Now a child will change the state of Parent--This is contextAPI
    
    return (
        <div>
            <h2>
                This is first child using Counter Context
                
            </h2>
            <h3> counter value is: {counterValue}</h3>
            <button onClick={() => {counterValue[1](++counterValue[0])}}> 
            {/* Here we have an array , countervalue, value on zero index, setcount function on 1 index */}
                Increment context
            </button>
        </div>
    )
};
export default Child;