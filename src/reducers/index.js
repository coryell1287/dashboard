import { combineReducers } from 'redux';
import signInReducer from 'reducers/SignInReducer';
import userProfileReducer from 'reducers/UserProfileReducer';
import pageResizeReduder from 'components/PageResizeControl/PageResizeReducer';

const rootReducer = combineReducers({
  signInState: signInReducer,
  userProfileState: userProfileReducer,
  resizeState: pageResizeReduder,
});

export default rootReducer;

