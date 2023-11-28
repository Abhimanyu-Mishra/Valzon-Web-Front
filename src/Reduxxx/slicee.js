import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
name: "cart",
initialState,
reducers :{
    addcart(state, action){
         state.push(action.payload)
    },
    deletecart(state, action){
        return state.filter((i)=>i.id != action.payload)
    }
}
})


