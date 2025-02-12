import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS, API_ENDPOINTS_POST } from "@/services/webConstants";
import {
  fetchContactScreenStart,
  fetchContactScreenSuccess,
  fetchContactScreenFail,
  postContactStart,
  postContactSuccess,
  postContactFail,
} from "./contactSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function* contactScreenSaga() {
  try {
    console.log("Inside contact screen saga");
    yield put(fetchContactScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.CONTACT_SCREEN
    );

    if (responseData) {
      console.log("contact screen data saga ==>", responseData.data);
      yield put(fetchContactScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchContactScreenFail());
    }
  } catch (error) {
    console.error("Error in contact screen saga:", error);
    yield put(fetchContactScreenFail());
  }
}

export function* postContactSaga(action) {
  const { payload } = action;
  console.log("payload", payload);
  try {
    console.log("Inside post contact screen saga");
    yield put(postContactStart());

    const { data: responseData } = yield call(
      axiosInstance.post,
      API_ENDPOINTS_POST.CONTACT_US,
      payload
    );

    if (responseData) {
      console.log("contact screen post data saga ==>", responseData);
      yield put(postContactSuccess({ response: responseData }));
    } else {
      yield put(postContactFail());
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error("Error in post contact screen post saga:", error);
    yield put(postContactFail());
  }
}
