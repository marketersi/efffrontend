import { createSlice } from '@reduxjs/toolkit';

const videoRecordingSlice = createSlice({
  name: 'videoRecording',
  initialState: {
    isLoading: true,
    screenData: {},
    isError: false,
  },
  reducers: {
    // Action when starting to fetch videoRecording screen data
    fetchVideoRecordingScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching videoRecording screen data is successful
    fetchVideoRecordingScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.screenData = payload.response;
    },

    // Action when fetching videoRecording screen data is successful
    fetchVideoRecordingScreenFail: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {
  fetchVideoRecordingScreenStart,
  fetchVideoRecordingScreenSuccess,
  fetchVideoRecordingScreenFail,
} = videoRecordingSlice.actions;
export default videoRecordingSlice.reducer;
