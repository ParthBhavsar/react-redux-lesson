
import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import transactionsReducer from "./transactionsReducer"

const reducers = combineReducers({
    bankAccount: bankReducer,
    transactions: transactionsReducer,
})

export default reducers
