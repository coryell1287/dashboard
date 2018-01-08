import { combineReducers } from 'redux';


class UserProfile {
  static user(state = null, action) {
    switch (action.type) {
      case 'RETRIEVED_USER_PROFILE':
        return action.user;
      case 'FAILED_RETRIEVE_USER_PROFILE':
        return action.error;
      default:
        return state;
    }
  }

  static privileges(state = null, action) {
    switch (action.type) {
      case 'RETRIEVED_USER_PRIVILEGES':
        return action.privileges;
      case 'FAILED_RETRIEVED_USER_PRIVILEDGES':
        return action.error;
      default:
        return state;
    }
  }
}

const reducers = {
  user: UserProfile.user,
  privileges: UserProfile.privileges,
};

export default combineReducers(reducers);
