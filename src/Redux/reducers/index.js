import { combineReducers } from 'redux';
import { dashboardReducer } from './dashboardReducers';

const rootReducers = combineReducers({
  dashboardData: dashboardReducer,
});

export default rootReducers;
