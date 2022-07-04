import React from 'react'
import { useSelector } from 'react-redux'

const Transactions = () => {
  const transactions = useSelector((state) => state.transactions.transactions)

  return (
    <>
      <h3>Transactions</h3>
      {Object.values(transactions).map((transaction) => {
        return (
          <>
            <p>name: {transaction.name}</p>
            <p>amount: {transaction.amount}</p>
          </>
        )
      })}
    </>

  )
}

export default Transactions
