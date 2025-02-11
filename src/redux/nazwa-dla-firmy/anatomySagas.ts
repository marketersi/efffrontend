import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS } from "@/services/webConstants";
import {
  fetchAnatomyScreenFail,
  fetchAnatomyScreenStart,
  fetchAnatomyScreenSuccess,
} from "./anatomySlice";

export function* anatomyScreenSaga() {
  try {
    console.log("Inside anatomy screen saga");
    yield put(fetchAnatomyScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.ANATOMY_SCREEN
    );
    console.log(responseData);
    

    if (responseData) {
      console.log("anatomy screen data saga ==>", responseData.data);
      yield put(fetchAnatomyScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchAnatomyScreenFail());
    }
  } catch (error) {
    console.error("Error in anatomy screen saga:", error);
    yield put(fetchAnatomyScreenFail());
  }
}
