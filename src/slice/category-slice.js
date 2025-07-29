import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 
 
 
 //Api calling using thunk method
 export const getCategory = createAsyncThunk("category/getCategory", async ()=>{
    const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
    return response.data;
 });
 
 
 
 //slice
 const categorySlice = createSlice({
    name:"category",
    initialState:{
        value: [],
        loading: false,
        error: null,
        status: "",

    },
    reducers: {},
    extraReducers: (builder) => {
builder
.addCase(getCategory.pending, (state)=>{
    state.status = "Loading....";
    state.loading = true;
})
.addCase(getCategory.fulfilled, (state, action) => {
    state.status = "Success";
   state.value = action.payload;
   state.loading = false;

})
.addCase(getCategory.rejected, (state, action)=>{
    state.status = "Failed";
    state.error = action.error.message ?? "Something went wrong"
});
    }
});
export default categorySlice.reducer;
