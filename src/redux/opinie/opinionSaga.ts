import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchOpinionScreenFail,
  fetchOpinionScreenStart,
  fetchOpinionScreenSuccess,
} from "./opinionSlice";

export function* opinionScreenSaga() {
  try {
    console.log("Inside opinion screen saga");
    yield put(fetchOpinionScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.OPINION_SCREEN
    );

    if (responseData) {
      console.log("opinion screen data saga ==>", responseData.data);
      yield put(fetchOpinionScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchOpinionScreenFail());
    }
  } catch (error) {
    console.error("Error in opinion screen saga:", error);
    yield put(fetchOpinionScreenFail());
  }
}
