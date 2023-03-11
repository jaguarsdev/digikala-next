// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const SetSearchItem = createAsyncThunk(
    'search/SetSearchItem',
    async props => {
        return props
    },
)

export const search = createSlice({
    name: 'search',
    initialState: {
        searchvalue: '',
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(SetSearchItem.fulfilled, (state, action) => {
            state.searchvalue = action.payload
        })
    },
})

export default search.reducer
