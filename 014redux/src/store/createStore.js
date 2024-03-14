import accountReducer from './features/account.js'
import {increment,decrement, incrementByAmount} from './features/account.js'

import bonusReducer from './features/bonus.js'
import {increment as bonusIncrement} from './features/bonus.js'
import {thunk} from 'redux-thunk'
import apiReducer from './features/api.js'
import { fetchData } from './features/api.js'

import {createStore,combineReducers,applyMiddleware} from 'redux'

const rootReducer=combineReducers({
    account:accountReducer,
    bonus:bonusReducer,
    api:apiReducer
})

const store=createStore(rootReducer,applyMiddleware(thunk))

export default store


// store.subscribe(()=>{console.log(store.getState())})

// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(incrementByAmount(5))
// store.dispatch(bonusIncrement())
// store.dispatch(fetchData())
