import React, { useReducer } from 'react';
import counterReducer from './counterReducer';
const Child2 = () => {
    let [state, dispatch] = useReducer(counterReducer, 1);
    //1 is the initial value for state. it must be provided here in case of reducer
    //reducer is actually central location which can change the state of any component.
    // Very Important: Keep in mind capital and small letters in react.mostly error occurs due to this reason.
    return (
        <div>
            <h2>
                This is second child using Counter Reducer
                
            </h2>
            <h3>Value of reducer state is : {state}</h3>
            <button onClick={() => dispatch('INCREMENT')}>
                Increment Reducer
            </button>
        </div>
    )

}

export default Child2; 