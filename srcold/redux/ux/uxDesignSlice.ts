import { createSlice } from "@reduxjs/toolkit";

const uxSlice = createSlice({
  name: "ux",
  initialState: {
    isLoading: false,
    screenData: {},
  },
  reducers: {
    // Action when starting to fetch ux screen data
    fetchUXScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching ux screen data is successful
    fetchUXScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching ux screen data is successful
    fetchUXScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const { fetchUXScreenStart, fetchUXScreenSuccess, fetchUXScreenFail } =
  uxSlice.actions;
export default uxSlice.reducer;
