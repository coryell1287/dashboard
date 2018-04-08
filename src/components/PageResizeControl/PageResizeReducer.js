import { combineReducers } from 'redux';

class PageResizeReducer {
  static resize(state = false, action) {
    switch (action.type) {
      case 'RESIZE_PAGE':
        return !state;
      default:
        return state;
    }
  }
}

const reducers = {
  resizePage: PageResizeReducer.resize,
};

export default combineReducers(reducers);
