import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS, API_ENDPOINTS_POST } from "@/services/webConstants";
import {
  fetchSalesContentScreenFail,
  fetchSalesContentScreenStart,
  fetchSalesContentScreenSuccess,
  sendAQuoteFailed,
  sendAQuoteStarted,
  sendAQuoteSuccess,
} from "./salescontentSlice";
import { toast } from "react-toastify";

export function* salesScreenSaga() {
  try {
    console.log("Inside sales content screen saga");
    yield put(fetchSalesContentScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.SALES_SCREEN
    );

    if (responseData) {
      console.log("sales content screen data saga ==>", responseData.data);
      yield put(
        fetchSalesContentScreenSuccess({ response: responseData.data })
      );
    } else {
      yield put(fetchSalesContentScreenFail());
    }
  } catch (error) {
    console.error("Error in sales content screen saga:", error);
    yield put(fetchSalesContentScreenFail());
  }
}

export function* sendAQuoteSaga(action) {
  const { payload } = action;
  console.log("payload", payload);
  try {
    console.log("Inside post tresci screen saga");
    yield put(sendAQuoteStarted());

    const { data: responseData } = yield call(
      axiosInstance.post,
      API_ENDPOINTS_POST.SEND_A_QUOTE,
      payload
    );

    if (responseData) {
      console.log("tresci screen post data saga ==>", responseData);
      yield put(sendAQuoteSuccess({ response: responseData }));
    } else {
      yield put(sendAQuoteFailed());
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error("Error in send a tresci post saga:", error);
    yield put(sendAQuoteFailed());
  }
}
