import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0) // anything greater than 0
    .reduce((acc, item) => (acc += item), 0) // add them all through reduce
    .toFixed(2); // make it a decimal

    const expense = (amounts
        .filter(item => item < 0) //anything less than 0
        .reduce((acc, item) => (acc += item), 0) * -1) // add them all together with reduce and make it negative
        .toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">+{income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">-{expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses
