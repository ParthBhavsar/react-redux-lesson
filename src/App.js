import './App.css';
import BankAccount from './Bank/BankAccount';
import Transactions from './Bank/Transactions';

function App() {
  return (
    <div className="App">
      <BankAccount />
      <Transactions />
      {/* <button onClick={() => dispatch(depositMoney(1000))}>Deposit</button>
      <button onClick={() => dispatch(withdrawMoney(1000))}>Withdraw</button> */}
    </div>
  );
}

export default App;
