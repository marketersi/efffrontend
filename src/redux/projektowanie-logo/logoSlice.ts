import { createSlice } from '@reduxjs/toolkit';

const logoSlice = createSlice({
  name: 'logo',
  initialState: {
    isLoading: true,
    screenData: {},
  },
  reducers: {
    fetchLogoScreenStart: (state) => {
      state.isLoading = true;
    },

    fetchLogoScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    fetchLogoScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchLogoScreenStart,
  fetchLogoScreenSuccess,
  fetchLogoScreenFail,
} = logoSlice.actions;
export default logoSlice.reducer;
