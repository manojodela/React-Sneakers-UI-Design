import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0, cart: 0, showCart: false, success: false },
    reducers: {
        increment(state) { state.counter++; },
        decrement(state) { state.counter > 0 && state.counter-- },
        addToCart(state) { state.cart = state.counter },
        showCart(state) { state.showCart = !state.showCart },
        successModal(state) { state.success = !state.success },
        ResetCart(state) {state.cart = 0; state.counter = 0}
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;