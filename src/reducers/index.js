import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userProfileReducer from 'reducers/UserProfileReducer';
import pageResizeReduder from 'components/PageResizeControl/PageResizeReducer';
import testReducer from 'reducers/account';
import signInReducer from 'reducers/SignInReducer';

const rootReducer = (history) => combineReducers({
  userProfileState: userProfileReducer,
  resizeState: pageResizeReduder,
  testState: testReducer,
  signInState: signInReducer,
  router: connectRouter(history)
})

export default rootReducer
