import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";
//
// console.log(typeof logger)

// aciton constants
const inc = "account/increment";
const dec = "account/decrement";
const incByAmt = "account/incrementByAmount";
const incBonus = "bonus/increment";
const getAccUserPending = "account/getUser/pending";
const getAccUserFulFilled = "account/getUser/fulfilled";
const getAccUserRejected = "account/getUser/rejected";

// store
const store = createStore(
	combineReducers({ account: accountReducer, bonus: bonusReducer }),
	applyMiddleware(thunk, logger.default)
);

// reducer
function accountReducer(state = { amount: 1 }, action) {
	switch (action.type) {
		case inc:
			return { amount: state.amount + 1 };
		case dec:
			return { amount: state.amount - 1 };
		case incByAmt:
			return { amount: state.amount + action.payload };
		case "init":
			return { amount: action.payload };
		case getAccUserFulFilled:
			return { amount: action.payload, pending: action.pending };
		case getAccUserPending:
			return { ...state, pending: action.pending };
		case getAccUserRejected:
			return { ...state, error: action.error, pending:action.pending };

		default:
			return state;
	}

	// if (action.type === inc) {
	// 	// state.amount=state.amount+1
	// 	return { amount: state.amount + 1 };
	// }

	// if (action.type === dec){
	//     return { amount: state.amount - 1}
	// }

	// if (action. type === incByAmt){
	//     return { amount: state.amount + action.payload}
	// }
	// if(action.type=== "init"){
	//     return ( {
	//         amount:action.payload
	//     })
	// }
	// return state;
}

function bonusReducer(state = { points: 0 }, action) {
	switch (action.type) {
		case incBonus:
			return { points: state.points + 1 };
		case incByAmt:
			if (action.payload >= 100) {
				return { points: state.points + 1 };
			}

		default:
			return state;
	}
}

// global state
// console.log(store.getState())
// const history=[]
// store.subscribe(() => {
//     history.push(store.getState())
// 	console.log(history);
// });

// setInterval(()=>{
// store.dispatch({ type: "increment" });
// },2000)

// console.log(store.getState())

// action creator

function increment() {
	return { type: inc };
}

function decrement() {
	return { type: dec };
}

function incrementByAmount(value) {
	return { type: incByAmt, payload: value };
}

function getAccount(id) {
	return async function (dispatch, getState) {
		try {
			dispatch(getAccountUserPending());
			const response = await axios.get(`http://localhost:3000/${id}`);
			// dispatch({type:"getAccount",payload:response.data})
			dispatch(getAccountUserFullfilled(response.data.amount));
		} catch (error) {
			dispatch(getAccountUserRejected(error.message));
		}
	};

	// console.log(response.data)
}

function incrementBonus(value) {
	return { type: incBonus };
}

function getAccountUserFullfilled(value) {
	return { type: getAccUserFulFilled, payload: value, pending: false };
}
function getAccountUserPending() {
	return { type: getAccUserPending, pending: true };
}
function getAccountUserRejected(error) {
	return { type: getAccUserRejected, error: error,pending:false };
}
// function getAccount(){
//     return {
//         type:"getAccount",
//         payload:200
//     }
// }

// getAccount()

// store.subscribe(()=>{console.log(store.getState())})

// store.dispatch({type: inc })
// store.dispatch({type: dec })
// store.dispatch({type: incByAmt,payload:3})

// console.log(store.getState())
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(incrementByAmount(300))
// store.dispatch(getAccount(1))

// console.log(store.getState())

// console.log(store.getState().account.amount)

// store.dispatch(incrementBonus())
store.dispatch(getAccount(11));
