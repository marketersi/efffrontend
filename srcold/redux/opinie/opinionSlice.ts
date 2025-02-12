import { createSlice } from '@reduxjs/toolkit';

const opinionSlice = createSlice({
  name: 'opinion',
  initialState: {
    isLoading: true,
    screenData: {},
  },
  reducers: {
    // Action when starting to fetch opinion screen data
    fetchOpinionScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching opinion screen data is successful
    fetchOpinionScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching opinion screen data is successful
    fetchOpinionScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchOpinionScreenStart,
  fetchOpinionScreenSuccess,
  fetchOpinionScreenFail,
} = opinionSlice.actions;
export default opinionSlice.reducer;
