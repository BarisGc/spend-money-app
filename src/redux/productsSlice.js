import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch Api Data
export const fetchProducts = createAsyncThunk('products/getAllProducts', async () => {
    const res = await axios(`https://fakestoreapi.com/products`)
    return res.data
})

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        budget: 100000,
        items_maxStorage_quantity: [],
        items_purchased_quantity: [5],
    },
    reducers: {},
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

export default productsSlice.reducer;