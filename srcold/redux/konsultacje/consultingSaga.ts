import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchConsultingScreenFail,
  fetchConsultingScreenStart,
  fetchConsultingScreenSuccess,
} from "./consultingSlice";

export function* consultingScreenSaga() {
  try {
    console.log("Inside consulting screen saga");
    yield put(fetchConsultingScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.CONSULTING_SCREEN
    );

    if (responseData) {
      console.log("consulting screen data saga ==>", responseData.data);
      yield put(fetchConsultingScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchConsultingScreenFail());
    }
  } catch (error) {
    console.error("Error in consulting screen saga:", error);
    yield put(fetchConsultingScreenFail());
  }
}
