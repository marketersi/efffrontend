import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchCalculatorScreenFail,
  fetchCalculatorScreenStart,
  fetchCalculatorScreenSuccess,
} from "./calculatorSlice";

export function* calculatorScreenSaga() {
  try {
    console.log("Inside calculator screen saga");
    yield put(fetchCalculatorScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.CALCULATOR_SCREEN
    );

    if (responseData) {
      console.log("calculator screen data saga ==>", responseData.data);
      yield put(fetchCalculatorScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchCalculatorScreenFail());
    }
  } catch (error) {
    console.error("Error in calculator screen saga:", error);
    yield put(fetchCalculatorScreenFail());
  }
}
