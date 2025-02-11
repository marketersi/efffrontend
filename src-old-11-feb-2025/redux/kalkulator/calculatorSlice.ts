import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    isLoading: true,
    screenData: {},
  },
  reducers: {
    // Action when starting to fetch calculator screen data
    fetchCalculatorScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching calculator screen data is successful
    fetchCalculatorScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching calculator screen data is successful
    fetchCalculatorScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchCalculatorScreenStart,
  fetchCalculatorScreenSuccess,
  fetchCalculatorScreenFail,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
