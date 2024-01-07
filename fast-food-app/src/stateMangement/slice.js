import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:'actionsApp',
    initialState:{cart:[],user:[]},
    reducers:{
        addtocart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeOrder:(state,action)=>{
            state.cart=state.cart.filter(order=>order.idOrder!=action.payload)
        },
        createAccount:(state,action)=>{
            state.user.push(action.payload)
        },
        deleteAccount:(state,action)=>{
            state.user=state.user.filter(u=>u.id!=action.payload)
        }
        
    }
})



export const {addtocart,createAccount,removeOrder,deleteAccount}=slice.actions
export default slice.reducer
