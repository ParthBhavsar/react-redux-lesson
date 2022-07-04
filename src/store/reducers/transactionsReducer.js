const initialState = {
    transactions: {}
};

const transactionReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return null
        default:
            return state
    }
}

export default transactionReducer;