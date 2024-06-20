import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

// store is the central configuration for data for all components
// all components have access to it and use the information from here

export const store = configureStore({
    reducer:{
        // this is the state which we get from reducer
        // currently it holds the value we declared in initialState and it will keep updating when we perfom some action
        cartState: cartReducer
    }
});