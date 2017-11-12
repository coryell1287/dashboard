import { combineReducers } from 'redux';
import signinReducer from 'reducers/SigninReducer';

const rootReducer = combineReducers({
  signinState: signinReducer,
});

export default rootReducer;

