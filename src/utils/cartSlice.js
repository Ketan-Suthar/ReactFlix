import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        cleareItems: (state, action) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, cleareItems } = cartSlice.actions;
export default cartSlice.reducer;

