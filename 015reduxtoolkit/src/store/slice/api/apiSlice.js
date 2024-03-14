import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const fetchData=createAsyncThunk(
    'api/fetchData',
    async(remainURL)=>{
        const response = await axios.get('http://localhost:3000/accounts')
        return response.data
    }
)


const initialState={
    status:"idle",
    data:null,
    error:null
}

const apiSlice=createSlice({
    name:"api",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{state.status="pending"})
        .addCase(fetchData.fulfilled,(state,action)=>{state.status="fulfilled";
         state.data=action.payload})
         .addCase(fetchData.rejected,(state,action)=>{state.status="rejected",
        state.error=action.error})
    }
})

export default apiSlice.reducer

export {fetchData}