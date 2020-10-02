import React, { createContext, useReducer, useContext } from "react";

// Need Context API
// 1. To track basket
// 2. To Track user

// This is Data layer, prepare the data
export const StateContext = createContext()

// create Provider, wrap the app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how we use inside component, pull information from data layer
export const useStateValue = () => useContext(StateContext);