import { combineReducers } from 'redux';
import signInReducer from 'reducers/SignInReducer';

const rootReducer = combineReducers({
  signInState: signInReducer,
});

export default rootReducer;

