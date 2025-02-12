import { call, put } from 'redux-saga/effects';
import { axiosInstance } from '@/services/httpServices';
import { API_ENDPOINTS } from '@/services/webConstants';
import {
  fetchVideoRecordingScreenFail,
  fetchVideoRecordingScreenStart,
  fetchVideoRecordingScreenSuccess,
} from './videoRecordingSlice';

export function* videoRecordingScreenSaga() {
  try {
    console.log('Inside video recording screen saga');
    yield put(fetchVideoRecordingScreenStart());

    const { data: responseData } = yield call(
      axiosInstance.get,
      API_ENDPOINTS.PROFESSIONAL_VIDEO_RECORDING_SCREEN
    );

    if (responseData) {
      console.log('video recording screen data saga ==>', responseData.data);
      yield put(
        fetchVideoRecordingScreenSuccess({ response: responseData.data })
      );
    } else {
      yield put(fetchVideoRecordingScreenFail());
    }
  } catch (error) {
    console.error('Error in video recording screen saga:', error);
    yield put(fetchVideoRecordingScreenFail());
  }
}
