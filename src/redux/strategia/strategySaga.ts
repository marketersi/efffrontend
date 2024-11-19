import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchStrategyScreenFail,
  fetchStrategyScreenStart,
  fetchStrategyScreenSuccess,
} from "./strategySlice";

export function* strategyScreenSaga() {
  try {
    console.log("Inside strategy screen saga");
    yield put(fetchStrategyScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.STRATEGY_SCREEN
    );

    if (responseData) {
      console.log("strategy screen data saga ==>", responseData.data);
      yield put(fetchStrategyScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchStrategyScreenFail());
    }
  } catch (error) {
    console.error("Error in strategy screen saga:", error);
    yield put(fetchStrategyScreenFail());
  }
}
