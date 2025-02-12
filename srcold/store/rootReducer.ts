import { combineReducers } from 'redux';
import contactReducer from '@/redux/kontakt/contactSlice';
import factsReducer from '@/redux/faktow/factSlice';
import calculatorReducer from '@/redux/kalkulator/calculatorSlice';
import homeReducer from '@/redux/home/homeSlice';
import examinationReducer from '@/redux/zamow/zamowSlice';
import consultingReducer from '@/redux/konsultacje/consultingSlice';
import uxReducer from '@/redux/ux/uxDesignSlice';
import salesReducer from '@/redux/tresci/salescontentSlice';
import strategyReducer from '@/redux/strategia/strategySlice';
import opinionReducer from '@/redux/opinie/opinionSlice';
import priceListReducer from '@/redux/cennik/pricelistSlice';
import anatomyReducer from '@/redux/nazwa-dla-firmy/anatomySlice';
import teamReducer from '@/redux/zespol/teamSlice';
import logoReducer from '@/redux/projektowanie-logo/logoSlice';
import videoEditingReducer from '@/redux/Kreatywny-montaz-video/creativeVideoSlice';
import videoRecordingReducer from '@/redux/profesjonalne-nagrywanie-filmow/videoRecordingSlice';

const rootReducer = combineReducers({
  home: homeReducer,
  contact: contactReducer,
  facts: factsReducer,
  calculator: calculatorReducer,
  examination: examinationReducer,
  consulting: consultingReducer,
  ux: uxReducer,
  team: teamReducer,
  strategy: strategyReducer,
  opinion: opinionReducer,
  priceList: priceListReducer,
  sales: salesReducer,
  anatomy: anatomyReducer,
  logo: logoReducer,
  videoEditing: videoEditingReducer,
  videoRecording: videoRecordingReducer,
});

export default rootReducer;
