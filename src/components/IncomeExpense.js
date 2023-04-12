import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext)
  const incomes = transactions.map(transaction => {return transaction.amount > 0 ? transaction.amount : 0})
  const income = incomes.reduce((acc, val) => acc += val, 0).toFixed(2)
  const expenses = transactions.map(transaction => {return transaction.amount < 0 ? transaction.amount : 0})
  const expense = expenses.reduce((acc, val) => acc += val, 0).toFixed(2)
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${Math.abs(expense)}</p>
      </div>
    </div>
  )
}
