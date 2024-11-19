import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchTeamScreenFail,
  fetchTeamScreenStart,
  fetchTeamScreenSuccess,
} from "./teamSlice";

export function* teamScreenSaga() {
  try {
    console.log("Inside team screen saga");
    yield put(fetchTeamScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.TEAM_SCREEN
    );

    if (responseData) {
      console.log("team screen data saga ==>", responseData.data);
      yield put(fetchTeamScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchTeamScreenFail());
    }
  } catch (error) {
    console.error("Error in team screen saga:", error);
    yield put(fetchTeamScreenFail());
  }
}
