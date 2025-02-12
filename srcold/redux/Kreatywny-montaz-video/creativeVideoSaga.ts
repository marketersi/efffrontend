import { call, put } from 'redux-saga/effects';
import { axiosInstance } from '@/services/httpServices';
import { API_ENDPOINTS } from '@/services/webConstants';
import {
  fetchVideoEditingScreenFail,
  fetchVideoEditingScreenStart,
  fetchVideoEditingScreenSuccess,
} from './creativeVideoSlice';

export function* videoEditingScreenSaga() {
  try {
    console.log('Inside video editing screen saga');
    yield put(fetchVideoEditingScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.CREATIVE_VIDEO_EDITING_SCREEN
    );

    if (responseData) {
      console.log('video editing screen data saga ==>', responseData.data);
      yield put(
        fetchVideoEditingScreenSuccess({ response: responseData.data })
      );
    } else {
      yield put(fetchVideoEditingScreenFail());
    }
  } catch (error) {
    console.error('Error in video editing screen saga:', error);
    yield put(fetchVideoEditingScreenFail());
  }
}
