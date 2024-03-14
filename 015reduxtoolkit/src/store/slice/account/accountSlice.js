
import {createSlice} from '@reduxjs/toolkit'

const initialState={
    amount:0
}

const accountSlice=createSlice({
    name:"account",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.amount+=1;
        },
        decrement:(state,action)=>{
            state.amount-=1;
        },
        incrementByAmount:(state,action)=>{
            if(action.payload){
                state.amount+=action.payload        }

            }
    }
})

export const {increment,decrement,incrementByAmount} =accountSlice.actions

export default accountSlice.reducer;