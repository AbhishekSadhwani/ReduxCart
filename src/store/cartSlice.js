import { createSlice } from "@reduxjs/toolkit";

/*
creating a slice object which takes a name for the slice, 
initial state object and the obbject of reducer functions which have access to action and state
*/

const cartSlice = createSlice({
    name: 'cart',

    initialState: {
        cartList: [],
        total: 0
    },

    reducers: {
        add(state,actions){
            const updatedList = state.cartList.concat(actions.payload);
            const total = state.total + actions.payload.price;
            return {...state, total: total, cartList: updatedList};

        },

        remove(state,actions){
            const updatedList = state.cartList.filter(product => product.id !== actions.payload.id);
            const total = state.total - actions.payload.price;
            return {...state, total:total, cartList: updatedList};
        }
    }
});

// exporting the add and remove function from slice
export const {add,remove}  = cartSlice.actions;

// this reducer will be accessed in the store and will be registered in store
export const cartReducer = cartSlice.reducer;
