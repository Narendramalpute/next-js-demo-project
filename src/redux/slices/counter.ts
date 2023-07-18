import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: 0,
  reducers: {
    addValue(state:any, action:any) {
      state.push(action.payload);
    }
  }
});


export default counterSlice.reducer;
export const {addValue} = counterSlice.actions;
