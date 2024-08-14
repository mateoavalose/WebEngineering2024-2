import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}
const initialState: CounterState = {
    value: 0,
};
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
        state.value++;
        },
        decrement(state) {
        state.value--;
        },
        incrementByAmount(state, action: PayloadAction<number>) {
        state.value += action.payload;
        },
    },
});

// Export actions in order to use them in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Expoe reducer in order to use it in store
export default counterSlice.reducer;