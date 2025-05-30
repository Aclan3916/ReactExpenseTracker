import { createContext, useReducer } from "react";
import AppReducer from './AppReducer' //second step

//initial state / store
const initialState = {
    transactions:  [
   
    ]
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
//provides state actions to components it is wrapped around
export const GlobalProvider = ( {children} ) => {
    const[state, dispatch] = useReducer(AppReducer, initialState);

    //actions that made calls to our reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id //any data we want to send to our provider
        })
    }

    //add action
    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}