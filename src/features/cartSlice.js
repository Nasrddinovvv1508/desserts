import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let url = `https://online-json-server-api.up.railway.app/project/66a75ee21d2cd3eb11451b71/desserts`

export let getProducts = createAsyncThunk(`products`, async () => {
    let req = await fetch(url)
    let { data } = await req.json()

    return data
})

const initialState = {
    products: [],
    totalProducts: 0,
    totalPrice: 0,
    isLoading: false,
    error: null
};

export let cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        incrementItem: (state, { payload }) => { },
        decrementItem: (state, { payload }) => { },
        calculateTotal: (state, { payload }) => { },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.products = payload
                console.log(payload);
            })
            .addCase(getProducts.rejected, (state) => {
                state.isLoading = false;
            })
    },
});

export let { incrementItem, decrementItem, calculateTotal } = cartSlice.actions
export default cartSlice.reducer