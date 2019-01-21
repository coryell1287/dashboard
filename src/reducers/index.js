import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import pageResizeReduder from 'components/PageResizeControl/PageResizeReducer';
import signInReducer from 'components/SignIn/signIn.reducer';

const rootReducer = (history) => combineReducers({
  resizeState: pageResizeReduder,
  signInState: signInReducer,
  router: connectRouter(history)
});

export default rootReducer;
