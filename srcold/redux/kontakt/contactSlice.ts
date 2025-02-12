import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    isLoading: true,
    screenData: {},

    isContactUsLoading: false,
    contactUsResponse: {},
  },
  reducers: {
    // Action when starting to fetch contact screen data
    fetchContactScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching contact screen data is successful
    fetchContactScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching contact screen data fails
    fetchContactScreenFail: (state) => {
      state.isLoading = false;
    },

    // Action when starting to post contact
    postContactStart: (state) => {
      state.isContactUsLoading = true;
    },

    // Action when post contact data is successful
    postContactSuccess: (state, { payload }) => {
      state.isContactUsLoading = false;
      state.contactUsResponse = payload.response;
    },

    // Action when post contact data fails
    postContactFail: (state) => {
      state.isContactUsLoading = false;
    },
  },
});

export const {
  fetchContactScreenStart,
  fetchContactScreenSuccess,
  fetchContactScreenFail,

  postContactStart,
  postContactSuccess,
  postContactFail,
} = contactSlice.actions;
export default contactSlice.reducer;
