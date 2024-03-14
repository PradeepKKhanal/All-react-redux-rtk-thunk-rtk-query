

// inital state
const initialState={point:0}

// action type constants
const inc='bonus/increment'


// action creator

export function increment(){
    return({type:inc})
}

// reducer
export default function  bonusReducer(state=initialState,action){
    switch(action.type){
        case inc:
            return ({...state,point:state.point+1})
        default:
            return state
    }
}