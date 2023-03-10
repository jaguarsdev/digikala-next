// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const GetCart = createAsyncThunk('cart/GetProduct', async () => {
    const res = await axios.get('http://localhost:3000/api/product')
    return res.data
})

export const AddToCart = createAsyncThunk('cart/AddToCart', async props => {
    return props
})
export const RemoveCart = createAsyncThunk('cart/GetProduct', async () => {
    const res = await axios.get('http://localhost:3000/api/product')
    return res.data
})

export const cart = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
    },
    reducers: {},
    extraReducers: builder => {
        // builder.addCase(GetCart.fulfilled, (state, action) => {
        //     state.cart = action.payload
        // })
        builder.addCase(AddToCart.fulfilled, (state, action) => {
            state.carts.push(action.payload)
        })
    },
})

export default cart.reducer
