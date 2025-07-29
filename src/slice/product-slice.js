import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 
 
 
 //Api calling using thunk method
 export const getAllProducts = createAsyncThunk("products/getAllproducts", async (id)=>{
    const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
    return response.data;
 });
 
 
 
 //slice
 const productSlice = createSlice({
    name:"products",
    initialState:{
        value: [],
        loading: false,
        error: null,
        status: "",

    },
    reducers: {},
    extraReducers: (builder) => {
builder
.addCase(getAllProducts.pending, (state)=>{
    state.status = "Loading....";
    state.loading = true;
})
.addCase(getAllProducts.fulfilled, (state, action) => {
    state.status = "Success";
    console.log(action)
   state.value = action.payload;
   state.loading = false;

})
.addCase(getAllProducts.rejected, (state, action)=>{
    state.status = "Failed";
    state.error = action.error.message ?? "Something went wrong"
});
    }
});
export default productSlice.reducer;
