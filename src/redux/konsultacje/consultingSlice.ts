import { createSlice } from '@reduxjs/toolkit';

const consultingSlice = createSlice({
  name: 'consulting',
  initialState: {
    isLoading: true,
    screenData: {},
  },
  reducers: {
    // Action when starting to fetch consulting screen data
    fetchConsultingScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching consulting screen data is successful
    fetchConsultingScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching consulting screen data is successful
    fetchConsultingScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchConsultingScreenStart,
  fetchConsultingScreenSuccess,
  fetchConsultingScreenFail,
} = consultingSlice.actions;
export default consultingSlice.reducer;
