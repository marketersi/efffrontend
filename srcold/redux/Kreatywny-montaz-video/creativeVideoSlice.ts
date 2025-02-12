import { createSlice } from '@reduxjs/toolkit';

const creativeVideoEditingSlice = createSlice({
  name: 'videoEditing',
  initialState: {
    isLoading: true,
    screenData: {},
    isError: false,
  },
  reducers: {
    // Action when starting to fetch videoEditing screen data
    fetchVideoEditingScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching videoEditing screen data is successful
    fetchVideoEditingScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.screenData = payload.response;
    },

    // Action when fetching videoEditing screen data is successful
    fetchVideoEditingScreenFail: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  fetchVideoEditingScreenStart,
  fetchVideoEditingScreenSuccess,
  fetchVideoEditingScreenFail,
} = creativeVideoEditingSlice.actions;
export default creativeVideoEditingSlice.reducer;
