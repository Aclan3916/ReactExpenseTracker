//how we specify application state changes in response to certain actions to our store or context
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                //create new state
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            } 
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions : [action.payload, ...state.transactions]
            }
        default:
            return state
    }
}