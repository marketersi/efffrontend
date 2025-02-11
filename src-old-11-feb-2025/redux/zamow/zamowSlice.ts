import { createSlice } from '@reduxjs/toolkit';

const examinationSlice = createSlice({
  name: 'examination',
  initialState: {
    isLoading: true,
    screenData: {},

    isFormSubmit: false,
    isFormSubmitSuccess: false,
    formData: {},
  },
  reducers: {
    // Action when starting to fetch facts screen data
    fetchExaminationScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching Examination screen data is successful
    fetchExaminationScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching Examination screen data is successful
    fetchExaminationScreenFail: (state) => {
      state.isLoading = false;
    },

    // Submit Form
    examFormSubmitStarted: (state) => {
      state.isFormSubmit = true;
      state.isFormSubmitSuccess = false;
    },

    examFormSubmitSuccess: (state) => {
      state.isFormSubmit = false;
      state.isFormSubmitSuccess = true;
    },

    examFormSubmitFail: (state) => {
      state.isFormSubmit = false;
      state.isFormSubmitSuccess = false;
    },

    // Save Price list form data
    saveExaminationFormData: (state, { payload }) => {
      state.formData = { ...state.formData, ...payload };
      console.log('Examination form data', state.formData);
    },

    clearExaminationFormData: (state) => {
      state.formData = {};
    },
  },
});

export const {
  fetchExaminationScreenStart,
  fetchExaminationScreenSuccess,
  fetchExaminationScreenFail,

  examFormSubmitStarted,
  examFormSubmitSuccess,
  examFormSubmitFail,
  saveExaminationFormData,
  clearExaminationFormData,
} = examinationSlice.actions;
export default examinationSlice.reducer;
