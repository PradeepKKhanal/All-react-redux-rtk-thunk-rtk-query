import {createReducer,createAction} from '@reduxjs/toolkit'

// initial state
const initialState={
    value:0
}

// action creator

const increment=createAction('increment')
const decrement=createAction('decrement')
const incrementByAmount=createAction("incrementByAmount")


// reducer
const rewardReducer=createReducer(initialState,(builder)=>{
    builder.addCase(increment,(state,action)=>{state.value++})
    .addCase("decrement",(state,action)=>{state.value--})
    .addCase(incrementByAmount,(state,action)=>{if(action.payload) {state.value+=action.payload}})
})

export default rewardReducer
export {increment,decrement,incrementByAmount} 