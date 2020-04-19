import { SET_ACTIVE_TAB, RESET_STATE } from '../actions';
import initialState from './initialState';

export const tabs = (state = initialState.tabs, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload.activeTab
      };

    case RESET_STATE:
      return initialState.tabs;

    default:
      return state;
  }
};

