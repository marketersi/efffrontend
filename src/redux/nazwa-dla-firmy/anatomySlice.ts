import { createSlice } from "@reduxjs/toolkit";

const anatomySlice = createSlice({
  name: "anatomy",
  initialState: {
    isLoading: false,
    screenData: {},
  },
  reducers: {
    // Action when starting to fetch anatomy screen data
    fetchAnatomyScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching anatomy screen data is successful
    fetchAnatomyScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching anatomy screen data is successful
    fetchAnatomyScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchAnatomyScreenStart,
  fetchAnatomyScreenSuccess,
  fetchAnatomyScreenFail,
} = anatomySlice.actions;
export default anatomySlice.reducer;
