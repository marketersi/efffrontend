import { createSlice } from '@reduxjs/toolkit';

const teamSlice = createSlice({
  name: 'team',
  initialState: {
    isLoading: true,
    screenData: {},
  },
  reducers: {
    // Action when starting to fetch facts screen data
    fetchTeamScreenStart: (state) => {
      state.isLoading = true;
    },

    // Action when fetching Team screen data is successful
    fetchTeamScreenSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.screenData = payload.response;
    },

    // Action when fetching Team screen data is successful
    fetchTeamScreenFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  fetchTeamScreenStart,
  fetchTeamScreenSuccess,
  fetchTeamScreenFail,
} = teamSlice.actions;
export default teamSlice.reducer;
