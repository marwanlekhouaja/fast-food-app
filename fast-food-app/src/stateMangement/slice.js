import { createSlice } from "@reduxjs/toolkit";


const slice=createSlice({
    name:'actionsApp',
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addtocart}=slice.actions
export default slice.reducer