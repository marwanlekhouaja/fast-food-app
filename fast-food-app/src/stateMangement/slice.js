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
        }
    }
})



export const {addtocart,createAccount}=slice.actions
export default slice.reducer
