import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { depositMoney, withdrawMoney } from '../store/actions';

const BankAccount = () => {
  const dispatch = useDispatch();

  const bankAccount = useSelector((state) => state.bankAccount);

  const onClickDeposit = () => {
    dispatch(depositMoney(100))
  }

  const onClickWithdraw =() => {
    dispatch(withdrawMoney(50))
  }
  return (
    <>
      <p>{bankAccount.amount}</p>
      <div>
        <button onClick={onClickDeposit}>Deposit</button>
        <button onClick={onClickWithdraw}>Withdraw</button>
      </div>
    </>
  )
}

export default BankAccount
