const initialState = {
    transactions: [],
    page: 1,
    limit: 10,
};

const transactionReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "ADD_NEW_TRANSACTION": {
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    action.payload
                ]
            }
        }
        default:
            return state
    }
}

export default transactionReducer;