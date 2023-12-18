import { createSelector, createSlice } from "@reduxjs/toolkit"

const initialState = {
    books: []
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        increment: (state) => {
            state.count++
        },
    }
})




export default booksSlice.reducer