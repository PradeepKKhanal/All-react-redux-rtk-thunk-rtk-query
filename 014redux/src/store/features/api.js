// inital store
import axios from "axios";

const initialState= {
	loading: false,
	fulfilled: false,
	rejected: false,
};

// action type constant
const is_loading = "loading";
const is_fulfilled = "fulfilled";
const is_rejected = "rejected";

// action creator

export function fetchData() {
	return async function (dispatch) {
		
		try {
			dispatch({ type: is_loading });
			const response = await axios.get("http://localhost:3000/accounts");
			dispatch({ type: is_fulfilled, payload: response.data});
		} catch (error) {
			dispatch({ type: is_rejected, payload: error.message });
		}
	};
}

// reducers

export default function apiReducer(state = initialState, action) {
	switch (action.type) {
		case is_loading:
			return { ...state, loading: true };
		case is_fulfilled:
			return { ...state, loading: false, data: action.payload };
		case is_rejected:
			return {
				...state,
				loading: false,
				rejected: true,
				error: action.payload,
			};
        default:
            return state
	}
}
