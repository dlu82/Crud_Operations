import {combineReducers} from '@reduxjs/toolkit';
import jsonSlice from './slices/jsonSlice';

const rootReducer = combineReducers({
  jsonType: jsonSlice,
});

export default rootReducer;
