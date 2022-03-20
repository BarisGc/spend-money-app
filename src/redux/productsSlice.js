import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch Api Data
export const fetchProducts = createAsyncThunk('products/getAllProducts', async () => {
    const res = await axios(`https://fakestoreapi.com/products?limit=18`)
    return res.data
})

// Entity Adapter
export const productAdaptor = createEntityAdapter();
const initialState = productAdaptor.getInitialState({
    items: [],
    status: 'idle',
    budget: 10000,
});

export const productSelectors = productAdaptor.getSelectors((state) => state.products);

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addPurchase: productAdaptor.addOne,
        addDefaultPurchase: productAdaptor.addMany,
        deletePurchase: productAdaptor.removeOne,
        updatePurchase: productAdaptor.updateOne,
    },
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = [...action.payload];
            state.status = 'succeeded';
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export const { addPurchase, deletePurchase, updatePurchase, addDefaultPurchase } = productsSlice.actions;
export default productsSlice.reducer;