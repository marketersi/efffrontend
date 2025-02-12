import { call, put } from 'redux-saga/effects';
import { axiosInstance } from '@/services/httpServices';
import { API_ENDPOINTS } from '@/services/webConstants';
import {
  fetchHomeScreenFail,
  fetchHomeScreenStart,
  fetchHomeScreenSuccess,
} from './homeSlice';

export function* homeScreenSaga() {
  try {
    console.log('Inside home screen saga');
    yield put(fetchHomeScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.HOME_SCREEN
    );

    if (responseData) {
      console.log('home screen data saga ==>', responseData.data);
      yield put(fetchHomeScreenSuccess({ response: responseData.data }));
    } else {
      yield put(fetchHomeScreenFail());
    }
  } catch (error) {
    console.error('Error in home screen saga:', error);
    yield put(fetchHomeScreenFail());
  }
}
