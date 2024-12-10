import { call, put } from "redux-saga/effects";
import { axiosInstance } from "@/services/httpServices";
import { API_ENDPOINTS, API_ENDPOINTS_POST } from "@/services/webConstants";
import {
  fetchPriceListScreenFail,
  fetchPriceListScreenStart,
  fetchPriceListScreenSuccess,
  isMenuSubmitFail,
  isMenuSubmitStarted,
  isMenuSubmitSuccess,
} from "./pricelistSlice";
import { toast } from "react-toastify";

export function* priceListScreenSaga() {
  try {
    console.log("Inside Price list screen saga");
    yield put(fetchPriceListScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.PRICE_LIST_SCREEN
    );

    console.log(responseData);
    

    if (responseData) {
      console.log("Price list screen data saga ==>", responseData.data);
      yield put(fetchPriceListScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchPriceListScreenFail());
    }
  } catch (error) {
    console.error("Error in Price list screen saga:", error);
    yield put(fetchPriceListScreenFail());
  }
}

export function* cennikMenuStorSaga(action) {
  
  const payload = action.payload;
  console.log("Inside Price list screen saga post", payload , "--------");

  try {
    yield put(isMenuSubmitStarted());

    const { data: responseData } = yield call(
      axiosInstance.post,
      API_ENDPOINTS_POST.CENNIK_MENU_STOR,
      payload
    );

    if (responseData) {

      yield put(isMenuSubmitSuccess());
    } else {
      yield put(isMenuSubmitFail());
    }
  } catch (error) {
    
console.log(error)
    yield put(isMenuSubmitFail());
    toast.error("something went wrong");
  }
}
