const initialState = {
    amount: 5000,
    accountNumber: 123123,
    branchNumber: '004'
};

const bankReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "DEPOSIT":
            // logic goes here
            const finalAmount = state.amount + action.payload.amount
            return { ...state, amount: finalAmount }
        case "WITHDRAW":
            return { ...state, amount: state.amount - action.payload.amount }
        default:
            return state
    }
}

export default bankReducer;