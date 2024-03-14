import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './cartAPI';
import {fetchItems,addItem,updateItem, deleteItem} from './cartAPI'

const initialState = {
   items:[],
  status: 'idle',
};

export const fetchItemAsync = createAsyncThunk(
  'cart/fetchItems',
  async () => {
    const response = await fetchItems();
    // console.log(response.data)
    return response.data;
    
  }
);
 export const addItemAsync=createAsyncThunk(
  'cart/addItem',
  async(item)=>{
    
    const response=await addItem(item);
    return response.data;
  }
 )

 export const updateItemAsync=createAsyncThunk(
  'cart/updateItem',
  async(value)=>{
    const response=await updateItem(value);
    console.log(value)
    return response.data;
  }
 )

 export const deleteItemAsync=createAsyncThunk(
  'cart/deleteItem',
  async (id)=>{
    const response= await deleteItem(id)
    return id
  }

 )


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemAsync.pending, (state,action)=>{
        state.status='loading';
      })
      .addCase(fetchItemAsync.fulfilled,(state,action)=>{
        state.items= action.payload;
        state.status='fulfilled'
        console.log(action.payload)
      })
      .addCase(addItemAsync.fulfilled,(state,action)=>{
        state.items.push(action.payload)
        console.log(action.payload)
      })
      .addCase(updateItemAsync.fulfilled,(state,action)=>{
        console.log(action.payload)
       let index=state.items.findIndex((item)=>item.id===action.payload.id);
      //  state.items.splice(index,1,action.payload)
      state.items[index].quantity=action.payload.quantity
       console.log(action.payload)
      })
      .addCase(deleteItemAsync.fulfilled ,(state,action)=>{
       let index=state.items.findIndex((item)=>item.id===action.payload);
       state.items.splice(index,1)
       console.log(action.payload)
      })
  },
});

export const {  } = cartSlice.actions;




export default cartSlice.reducer;
