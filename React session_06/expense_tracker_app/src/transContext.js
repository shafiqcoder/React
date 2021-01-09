/* eslint-disable no-undef */
import React, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';
let initialTransaction = [
    { amount: 500, desc: "Salary" },
]
export const TransactionContext = createContext(initialTransaction);
export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);
    function addTransaction(transObj) {
        dispatch({
            type: "ADD",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }
    function deleteTransaction(index) {
        dispatch({
            type: "DEL",
            payload: index,
        });
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction

        }}>
            {children}
        </TransactionContext.Provider>
    )
}