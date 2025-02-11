import { createSlice } from '@reduxjs/toolkit';

const strategySlice = createSlice({
  name: 'strategy',
  initialState: {
    isLoading: true,
    screenData: {},
  },
  reducers: {
    // Action when starting to fetch strategy screen data
    fetchStrategyScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching strategy screen data is successful
    fetchStrategyScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching strategy screen data is successful
    fetchStrategyScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchStrategyScreenStart,
  fetchStrategyScreenSuccess,
  fetchStrategyScreenFail,
} = strategySlice.actions;
export default strategySlice.reducer;
