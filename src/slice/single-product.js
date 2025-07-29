import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 
 
 
 //Api calling using thunk method
 export const getSingleProductById = createAsyncThunk("singleproducts/getsingleproducts", async (id)=>{
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
    return response.data;
 });
 
 
 
 //slice
 const SingleProduct = createSlice({
    name:"singleproducts",
    initialState:{
        value: [],
        loading: false,
        error: null,
        status: "",

    },
    reducers: {},
    extraReducers: (builder) => {
builder
.addCase(getSingleProductById.pending, (state)=>{
    state.status = "Loading....";
    state.loading = true;
})
.addCase(getSingleProductById.fulfilled, (state, action) => {
    state.status = "Success";
   state.value = action.payload;
   state.loading = false;

})
.addCase(getSingleProductById.rejected, (state, action)=>{
    state.status = "Failed";
    state.error = action.error.message ?? "Something went wrong"
});
    }
});
export default SingleProduct.reducer;
