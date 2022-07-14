import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'

const Transactions = () => {
  const transactions = useSelector((state) => state.transactions.transactions)

  return (
    <>
      <h3>Transactions</h3>
      <ul>
      {transactions.map((transaction) => {
          return (
            <li>
              <span>type: {transaction.transactionType}<br/>amount: ${transaction.amount}<br/>time: {moment.unix(transaction.timestamp).format('ll')}</span>
            </li>
          )
        })}
      </ul>
    </>

  )
}

export default Transactions
