import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchLogoScreenFail,
  fetchLogoScreenStart,
  fetchLogoScreenSuccess,
} from "./logoSlice";

export function* logoScreenSaga() {
  try {
    yield put(fetchLogoScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.LOGO_SCREEN
    );

    if (responseData) {
      console.warn("🟢logo screen data saga 👉👉👉", responseData.data);
      yield put(fetchLogoScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchLogoScreenFail());
    }
  } catch (error) {
    console.error("Error in logo screen saga:", error);
    yield put(fetchLogoScreenFail());
  }
}
