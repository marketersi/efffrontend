import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS, API_ENDPOINTS_POST } from "@/services/webConstants";
import {
  examFormSubmitFail,
  examFormSubmitStarted,
  examFormSubmitSuccess,
  fetchExaminationScreenFail,
  fetchExaminationScreenStart,
  fetchExaminationScreenSuccess,
} from "./zamowSlice";

export function* examinationScreenSaga() {
  try {
    console.log("Inside exam screen saga");
    yield put(fetchExaminationScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.EXAMINATION_SCREEN
    );

    if (responseData) {
      console.log("exam screen data saga ==>", responseData.data);
      yield put(fetchExaminationScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchExaminationScreenFail());
    }
  } catch (error) {
    console.error("Error in exam screen saga:", error);
    yield put(fetchExaminationScreenFail());
  }
}

export function* examinationFormSaga(action) {
  const payload = action.payload;
  console.log("Examination screen saga post", payload);

  try {
    yield put(examFormSubmitStarted());

    const { data: responseData } = yield call(
      axiosInstance.post,
      API_ENDPOINTS_POST.EXAM_FORM_STORE,
      payload
    );

    if (responseData) {
      console.log("exam form submit success saga");

      yield put(examFormSubmitSuccess());
    } else {
      console.log("exam form submit failed saga");
      yield put(examFormSubmitFail());
    }
  } catch (error) {
    console.log("exam form submit failed catch saga");
    yield put(examFormSubmitFail());
  }
}
