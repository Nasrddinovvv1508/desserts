import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

let url = `https://online-json-server-api.up.railway.app/project/66a75ee21d2cd3eb11451b71/desserts`

export let getProducts = createAsyncThunk(`products`, async () => {
    let req = await fetch(url)
    let { data } = await req.json()

    return data
})

function cartFromLocalStorage() {
    return JSON.parse(localStorage.getItem("cart")) || []
}

const initialState = {
    products: [],
    cartProducts: cartFromLocalStorage(),
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
        addToCart: (state, { payload }) => {
            if (!state.cartProducts.includes(payload)) {
                state.cartProducts = [...state.cartProducts, payload]
                toast.success(`Added ${payload.name} to cart`)
            }
            console.log(state.cartProducts);
            localStorage.setItem("cart", JSON.stringify(state.cartProducts))
        },
        removeFromCart: (state, { payload }) => {
            state.cartProducts = state.cartProducts.filter((item) => item.id !== payload)
            console.log(state.cartProducts);
            toast.success(`Removed from cart`)
            localStorage.setItem("cart", JSON.stringify(state.cartProducts))
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.products = payload
            })
            .addCase(getProducts.rejected, (state) => {
                state.isLoading = false;
            })
    },
});

export let { incrementItem, decrementItem, calculateTotal, addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer