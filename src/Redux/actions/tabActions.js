import { SET_ACTIVE_TAB } from './actionTypes';

export const setActiveTab = activeTab => {
  return {
    type: SET_ACTIVE_TAB,
    payload: {
      activeTab
    }
  };
};
