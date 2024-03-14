

// action type constants
const inc = "account/increment";
const dec = "account/decrement";
const incByAmt = "account/incrementByAmount";
// const incBonus = "bonus/increment";
const getAccUserPending = "account/getUser/pending";
const getAccUserFulFilled = "account/getUser/fulfilled";
const getAccUserRejected = "account/getUser/rejected";


// action creators

export function increment(){
    return( {type:inc})
}
export function decrement(){
    return ( {type:dec})
}
export function incrementByAmount(value){
    return({type:incByAmt,payload:value})
}

// inital state
const initialState={amount:0}

// reducer

function accountReducer(state=initialState,action){
    switch(action.type){
        case inc:
            return ({...state , amount:state.amount+1})
        case dec: 
            return({...state, amount: state.amount-1})
        case incByAmt:
            return({...state, amount:state.amount+action.payload})
        default:
            return state
    }
   

}

export default accountReducer;