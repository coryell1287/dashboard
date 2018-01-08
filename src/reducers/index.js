import { combineReducers } from 'redux';
import signInReducer from 'reducers/SignInReducer';
import userProfileReducer from 'reducers/UserProfileReducer';

const rootReducer = combineReducers({
  signInState: signInReducer,
  userProfileState: userProfileReducer,
});

export default rootReducer;

