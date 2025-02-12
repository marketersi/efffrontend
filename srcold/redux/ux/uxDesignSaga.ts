import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchUXScreenFail,
  fetchUXScreenStart,
  fetchUXScreenSuccess,
} from "./uxDesignSlice";

export function* uxScreenSaga() {
  try {
    console.log("Inside ux screen saga");
    yield put(fetchUXScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.UX_SCREEN
    );

    if (responseData) {
      console.log("ux screen data saga ==>", responseData.data);
      yield put(fetchUXScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchUXScreenFail());
    }
  } catch (error) {
    console.error("Error in ux screen saga:", error);
    yield put(fetchUXScreenFail());
  }
}
