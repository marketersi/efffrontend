import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    isLoading: true,
    screenData: {},
    isError: false,
  },
  reducers: {
    // Action when starting to fetch home screen data
    fetchHomeScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching home screen data is successful
    fetchHomeScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.screenData = payload.response;
    },

    // Action when fetching home screen data is successful
    fetchHomeScreenFail: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  fetchHomeScreenStart,
  fetchHomeScreenSuccess,
  fetchHomeScreenFail,
} = homeSlice.actions;
export default homeSlice.reducer;
