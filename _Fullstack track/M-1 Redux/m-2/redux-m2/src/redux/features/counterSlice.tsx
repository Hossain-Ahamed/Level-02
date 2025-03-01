import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterType = {count : number}
const initialState :CounterType = { count: 0 };

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue : (state,action : PayloadAction<number>)=>{
        state.count = state.count + action.payload
    }
  },
});

export const { increment, decrement,incrementByValue } = CounterSlice.actions;

export default CounterSlice.reducer;
