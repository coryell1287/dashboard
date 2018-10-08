import * as types from 'actions';
import { combineReducers } from 'redux';

const testReducer = (state = '', action) => {
  switch (action.type) {
    case types.CREATE_ACTION:
      return 'testReducer is working';
    default:
      return state;
  }
};

export default combineReducers({
  testReducer,
});
