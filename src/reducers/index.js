import { combineReducers } from 'redux';
import userProfileReducer from 'reducers/UserProfileReducer';
import pageResizeReduder from 'components/PageResizeControl/PageResizeReducer';
import testReducer from 'reducers/account';
import signInReducer from 'reducers/SignInReducer';

const rootReducer = combineReducers({
  userProfileState: userProfileReducer,
  resizeState: pageResizeReduder,
  testState: testReducer,
  signInState: signInReducer,
});

export default rootReducer;

