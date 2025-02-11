import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchFactsScreenFail,
  fetchFactsScreenStart,
  fetchFactsScreenSuccess,
} from "./factSlice";

export function* factsScreenSaga() {
  try {
    console.log("Inside facts screen saga");
    yield put(fetchFactsScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.FACTS_SCREEN
    );

    if (responseData) {
      console.log("facts screen data saga ==>", responseData.data);
      yield put(fetchFactsScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchFactsScreenFail());
    }
  } catch (error) {
    console.error("Error in facts screen saga:", error);
    yield put(fetchFactsScreenFail());
  }
}
