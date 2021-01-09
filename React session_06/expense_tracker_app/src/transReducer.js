const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case "ADD": {
            return [action.payload, ...state]
        }
        case "DEL":
            state = state.filter((object, index) => index !== action.payload)
            return [...state]
        default:
            return state;

    }
})
export default TransactionReducer;