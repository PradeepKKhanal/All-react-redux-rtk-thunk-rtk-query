import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slice/account/accountSlice.js";
import bonusReducer from './slice/bonus/bonusSlice.js'
import apiReducer from './slice/api/apiSlice.js'
import rewardReducer from "./slice/reward/reward.js";
import { fetchData } from "./slice/api/apiSlice.js";

import {increment,incrementByAmount,decrement} from "./slice/account/accountSlice.js"
import {increment as incrementBonus} from './slice/bonus/bonusSlice.js'
import {increment as rewardIncrement} from './slice/reward/reward.js'

import {adminApi} from './slice/adminApi/adminApiSlice.js'
const store=configureStore({
    reducer:{
        account:accountReducer,
        bonus:bonusReducer,
        api:apiReducer,
        reward:rewardReducer,
        [adminApi.reducerPath]:adminApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(adminApi.middleware)
    
})
export default store

// console.log(store.getState())

store.subscribe(()=>{console.log(store.getState())})


// store.dispatch(increment())
// store.dispatch(incrementByAmount(5))
// store.dispatch(decrement())
// store.dispatch(incrementBonus())
console.log(store.getState())
store.dispatch(rewardIncrement())