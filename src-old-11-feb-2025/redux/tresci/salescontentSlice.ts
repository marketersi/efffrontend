import { createSlice } from "@reduxjs/toolkit";

const salesContentSlice = createSlice({
  name: "anatomy",
  initialState: {
    isLoading: false,
    screenData: {},

    isFormSubmitted: false,
  },
  reducers: {
    // Action when starting to fetch sales content screen data
    fetchSalesContentScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching sales content screen data is successful
    fetchSalesContentScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching sales content screen data is successful
    fetchSalesContentScreenFail: (state) => {
      state.isLoading = false;
    },

    // Submit a form to get quote
    sendAQuoteStarted: (state) => {
      state.isFormSubmitted = false;
    },
    sendAQuoteSuccess: (state, { payload }) => {
      console.log("inside sendAQuoteSuccess", payload);
      state.isFormSubmitted = payload.response.status;
    },
    sendAQuoteFailed: (state) => {
      state.isFormSubmitted = false;
    },
  },
});

export const {
  fetchSalesContentScreenStart,
  fetchSalesContentScreenSuccess,
  fetchSalesContentScreenFail,

  sendAQuoteStarted,
  sendAQuoteSuccess,
  sendAQuoteFailed,
} = salesContentSlice.actions;
export default salesContentSlice.reducer;
