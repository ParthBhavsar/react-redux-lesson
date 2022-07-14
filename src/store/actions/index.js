import moment from 'moment'
export const addNewTransaction = (amount, transactionType, timestamp) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_NEW_TRANSACTION',
            payload: {
                amount,
                transactionType,
                timestamp
            }
        })
    }
}

export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "DEPOSIT",
            payload: { amount }
        });
        dispatch(addNewTransaction(amount, 'deposit', moment().unix()))
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "WITHDRAW",
            payload: { amount }
        });
        dispatch(addNewTransaction(amount, 'withdraw', moment().unix()))
    }
}

export const getUsers = () => {
    // https://randomuser.me/api/?results=10
}

export const getUserData = (id) => {
    return (dispatch) => {
        dispatch({
            type: "FETCHING_USER_DATA",
            payload: {isFetchingData: true}
        })
        // https://randomuser.me/api/?id=1
        // Axios/fetch and send the request
        const result = {}
        dispatch({
            type: "SUCCESSFULLY_FETCHED_USER_DATA",
            payload: {isFetchingData: false, result}
        })
    }
}