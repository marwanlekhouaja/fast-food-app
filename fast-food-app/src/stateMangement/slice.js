import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'actionsApp',
    initialState:{cart:[],user:[]},
    reducers:{
        addtocart:(state,action)=>{
            state.cart.push(action.payload)
        },
        createAccount:(state,action)=>{
            state.user.push(action.payload)
        },
        removeOrder:(state,action)=>{
            state.cart=state.cart.filter(order=>order.idOrder!=action.payload)
        },
        
    }
})



export const {addtocart,createAccount,removeOrder}=slice.actions
export default slice.reducer
