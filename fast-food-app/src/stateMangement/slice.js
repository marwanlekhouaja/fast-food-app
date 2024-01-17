import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "actionsApp",
  initialState: { cart: [], user: [],showAlert:false,showToast:false},
  reducers: {
    addtocart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeOrder: (state, action) => {
      state.cart = state.cart.filter(
        (order) => order.idOrder != action.payload
      );
    },
    createAccount: (state, action) => {
      state.user.push(action.payload);
    },
    deleteAccount: (state, action) => {
      state.user = state.user.filter((u) => u.id != action.payload);
    },
    updateUser: (state, action) => {
      state.user = state.user.map(prev => {
        if(prev.id==action.payload.id){
            return {
                ...prev,
                id:action.payload.id,
                fullname:action.payload.fullname,
                email:action.payload.email,
                password:action.payload.password,
                number:action.payload.number
            }
        }
        return prev
      });
      state.showAlert=true
      
    },
    notificationToast:(state,action)=>{
      state.showToast=action.payload
    }
  },
});

export const { addtocart, createAccount, removeOrder, deleteAccount,updateUser,notificationToast } =
  slice.actions;
export default slice.reducer;
