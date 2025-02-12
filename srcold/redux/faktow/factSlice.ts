import { createSlice } from "@reduxjs/toolkit";

const factSlice = createSlice({
  name: "facts",
  initialState: {
    isLoading: false,
    screenData: {},
  },
  reducers: {
    // Action when starting to fetch facts screen data
    fetchFactsScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching facts screen data is successful
    fetchFactsScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching facts screen data is successful
    fetchFactsScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchFactsScreenStart,
  fetchFactsScreenSuccess,
  fetchFactsScreenFail,
} = factSlice.actions;
export default factSlice.reducer;
