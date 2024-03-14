import {createAction, createSlice} from '@reduxjs/toolkit'

const initialState={points:0}
const incByAmt=createAction('account/incrementByAmount')

const bonusSlice=createSlice({
    name:'bonus',
    initialState,
    reducers:{
        increment:(state,action)=>{
           state.points+=1
        }
    },
    extraReducers:(builder)=>{
        // builder.addCase('account/incrementByAmount',(state,action)=>{
        //     if(action.payload>200){
        //         state.points++
        //     }
        // })
        builder.addCase(incByAmt,(state,action)=>{
            if(action.payload>200){
                state.points++
            }
        })
    }

})

export default bonusSlice.reducer

export const {increment} = bonusSlice.actions