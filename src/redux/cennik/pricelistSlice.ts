import { createSlice } from "@reduxjs/toolkit";

const priceListSlice = createSlice({
  name: "pricelist",
  initialState: {
    isLoading: false,
    screenData: {},

    isMenuSubmit: false,
    isMenuSubmitSuccess: false,
    formData: {},
  },
  reducers: {
    // Action when starting to fetch price list screen data
    fetchPriceListScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching price list screen data is successful
    fetchPriceListScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching price list screen data is successful
    fetchPriceListScreenFail: (state) => {
      state.isLoading = false;
    },
    // ----------
    isMenuSubmitStarted: (state) => {
      state.isMenuSubmit = true;
      state.isMenuSubmitSuccess = false;
    },

    isMenuSubmitSuccess: (state) => {
      state.isMenuSubmit = false;
      state.isMenuSubmitSuccess = true;
    },

    isMenuSubmitFail: (state) => {
      state.isMenuSubmit = false;
      state.isMenuSubmitSuccess = false;
    },

    // Save Price list form data
    savePriceListFormData: (state, { payload }) => {
      state.formData = { ...state.formData, ...payload };
      console.log("form data", state.formData);
    },

    clearPriceListFormData: (state) => {
      state.formData = {};
      state.isMenuSubmitSuccess = false;
    },
  },
});

export const {
  fetchPriceListScreenStart,
  fetchPriceListScreenSuccess,
  fetchPriceListScreenFail,

  isMenuSubmitStarted,
  isMenuSubmitSuccess,
  isMenuSubmitFail,

  savePriceListFormData,
  clearPriceListFormData,
} = priceListSlice.actions;
export default priceListSlice.reducer;
