import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Data: [],
};

const spaceDataSlice = createSlice({
  name: 'spaceData',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.Data = action.payload;
    },
  },
});

export const { addData } = spaceDataSlice.actions;
export default spaceDataSlice.reducer;
