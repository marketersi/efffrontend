import { FETCH_FACTS_SCREEN_DATA } from '@/redux/faktow/factActions';
import { factsScreenSaga } from '@/redux/faktow/factSagas';
import { FETCH_HOME_SCREEN_DATA } from '@/redux/home/homeAction';
import { homeScreenSaga } from '@/redux/home/homeSagas';
import { FETCH_CALCULATOR_SCREEN_DATA } from '@/redux/kalkulator/calculatorAction';
import { calculatorScreenSaga } from '@/redux/kalkulator/calculatorSaga';
import { FETCH_CONSULTING_SCREEN_DATA } from '@/redux/konsultacje/consultingAction';
import { consultingScreenSaga } from '@/redux/konsultacje/consultingSaga';
import {
  FETCH_CONTACT_SCREEN_DATA,
  POST_CONTACT,
} from '@/redux/kontakt/contactActions';
import {
  contactScreenSaga,
  postContactSaga,
} from '@/redux/kontakt/contactSagas';
import { FETCH_STRATEGY_SCREEN_DATA } from '@/redux/strategia/strategyAction';
import { strategyScreenSaga } from '@/redux/strategia/strategySaga';
import {
  FETCH_EXAMINATION_SCREEN_DATA,
  POST_EXAMINATION_SURVEY,
} from '@/redux/zamow/zamowAction';
import {
  examinationFormSaga,
  examinationScreenSaga,
} from '@/redux/zamow/zamowSagas';
import { FETCH_TEAM_SCREEN_DATA } from '@/redux/zespol/teamAction';
import { teamScreenSaga } from '@/redux/zespol/teamSaga';
import { FETCH_LOGO_SCREEN_DATA } from '@/redux/projektowanie-logo/logoAction';
import { logoScreenSaga } from '@/redux/projektowanie-logo/logoSaga';
import { all, takeLatest } from 'redux-saga/effects';
import {
  FETCH_PRICELIST_SCREEN_DATA,
  SUBMIT_MENU_STOR_FORM,
} from '@/redux/cennik/pricelistAction';
import {
  salesScreenSaga,
  sendAQuoteSaga,
} from '@/redux/tresci/salescontentSagas';
import {
  FETCH_SALES_SCREEN_DATA,
  SEND_ME_A_QUOTE,
} from '@/redux/tresci/salescontentAction';
import {
  cennikMenuStorSaga,
  priceListScreenSaga,
} from '@/redux/cennik/pricelistSaga';
import { anatomyScreenSaga } from '@/redux/nazwa-dla-firmy/anatomySagas';
import { FETCH_ANATOMY_SCREEN_DATA } from '@/redux/nazwa-dla-firmy/anatomyAction';
import { FETCH_UX_SCREEN_DATA } from '@/redux/ux/uxDesignAction';
import { uxScreenSaga } from '@/redux/ux/uxDesignSaga';
import { FETCH_OPINION_SCREEN_DATA } from '@/redux/opinie/opinionAction';
import { opinionScreenSaga } from '@/redux/opinie/opinionSaga';
import { FETCH_VIDEO_EDITING_SCREEN_DATA } from '@/redux/Kreatywny-montaz-video/creativeVideoAction';
import { videoEditingScreenSaga } from '@/redux/Kreatywny-montaz-video/creativeVideoSaga';
import { FETCH_VIDEO_RECORDING_SCREEN_DATA } from '@/redux/profesjonalne-nagrywanie-filmow/videoRecordingAction';
import { videoRecordingScreenSaga } from '@/redux/profesjonalne-nagrywanie-filmow/videoRecordingSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_CONTACT_SCREEN_DATA, contactScreenSaga),
    takeLatest(FETCH_FACTS_SCREEN_DATA, factsScreenSaga),
    takeLatest(FETCH_CALCULATOR_SCREEN_DATA, calculatorScreenSaga),
    takeLatest(FETCH_HOME_SCREEN_DATA, homeScreenSaga),
    takeLatest(FETCH_CONSULTING_SCREEN_DATA, consultingScreenSaga),
    takeLatest(FETCH_EXAMINATION_SCREEN_DATA, examinationScreenSaga),
    takeLatest(FETCH_STRATEGY_SCREEN_DATA, strategyScreenSaga),
    takeLatest(FETCH_TEAM_SCREEN_DATA, teamScreenSaga),

    takeLatest(POST_CONTACT, postContactSaga),
    takeLatest(FETCH_LOGO_SCREEN_DATA, logoScreenSaga),
    takeLatest(FETCH_PRICELIST_SCREEN_DATA, priceListScreenSaga),
    takeLatest(FETCH_SALES_SCREEN_DATA, salesScreenSaga),
    takeLatest(FETCH_ANATOMY_SCREEN_DATA, anatomyScreenSaga),
    takeLatest(FETCH_UX_SCREEN_DATA, uxScreenSaga),
    takeLatest(SUBMIT_MENU_STOR_FORM, cennikMenuStorSaga),
    takeLatest(SEND_ME_A_QUOTE, sendAQuoteSaga),
    takeLatest(POST_EXAMINATION_SURVEY, examinationFormSaga),
    takeLatest(FETCH_OPINION_SCREEN_DATA, opinionScreenSaga),
    takeLatest(FETCH_VIDEO_EDITING_SCREEN_DATA, videoEditingScreenSaga),
    takeLatest(FETCH_VIDEO_RECORDING_SCREEN_DATA, videoRecordingScreenSaga),
  ]);
}
