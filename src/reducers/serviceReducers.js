import { combineReducers } from 'redux';

const serviceTest = (state = '', action) => {
  switch (action.type) {
    case 'SUCCESSFUL_SERVICE_REQUEST': {
      const { data } = action.payload;
      return data;
    }
    case 'FAILED_SERVICE_REQUEST': {
      return 'Sorry. Your request failed';
    }
    default: {
      return state;
    }
  }
};
const progressIndicator = (state = false, action) => {
  switch (action.type) {
    case 'START_FETCHING': {
      return true;
    }
    case 'STOP_FETCHING': {
      return false;
    }
    default: {
      return state;
    }
  }
};


export default combineReducers({
  serviceTest,
  progressIndicator,
});

