import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counter-slice";
import categoryReducer from "./slice/category-slice";
import productReducer from "./slice/product-slice";
import SingleProductReducer from "./slice/single-product";
const store = configureStore({
    reducer:{
        counter: counterReducer,
        category: categoryReducer,
        allProducts: productReducer,
        singleProduct: SingleProductReducer,
    }
});
export default store;
