import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';
function Child() {
    let { transactions, addTransaction, deleteTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    const handleAddition = (event) => {
        event.preventDefault();
        //This will prevent the reload of webpage on button click/submit button.
        if (Number(newAmount) === 0) {
            alert("Please enter correct amount!")
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });
        setDesc('');
        setAmount(0);
    }
    const getIncome = () => {

        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount;
        }
        return income;
    }
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;

    }
    const handleDeletion = (index) => {
        deleteTransaction(index)
    }
    // Imp for delete button

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>
            <h5 className="shafiq">@shafiqcoder</h5>
            <h3>
                Your Balance <br /> $ {getIncome() + getExpense()}
            </h3>
            <div className="expense-container">
                <h3>
                    INCOME <br /> $ {getIncome()}
                </h3>
                <h3>
                    EXPENSE <br />$ {getExpense()}
                </h3>
            </div>
            <h3>
                History
            </h3>
            <hr />{/* this will add line on UI */}
            <ul className="transaction-list">
                {
                    transactions.map((transObj, ind) => {
                        return (
                            <li key={ind}>
                                <span>
                                    {transObj.desc}
                                </span>
                                <span>
                                    ${transObj.amount}
                                </span>
                                <button className="del-btn" onClick={() => handleDeletion(ind)} type="button">X</button>
                            </li>

                        )

                    })
                }
            </ul>
            <form className="transcation-form" onSubmit={handleAddition}>
                <label>
                    Enter Description<br />
                    {/* <br /> this will shift next element to new line */}
                    <input type="text" value={newDesc} placeholder="Details of transaction" onChange={(ev) => setDesc(ev.target.value)} required />
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    (for INCOME write with + sign & EXPENSE with - sign)
                    <input type="number" value={newAmount} placeholder="Amount" onChange={(ev) => setAmount(ev.target.value)} required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>



        </div>
    );
}

export default Child;
