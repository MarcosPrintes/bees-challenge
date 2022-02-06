import { Reducer } from 'redux';
import { User, ActionTypesUser } from './types';

const INITIAL_STATE: User = {
  name: '',
};

const reducer: Reducer<User> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypesUser.USER_LOGIN_SUCCESS:
      return { ...state, name: action.payload };
    case ActionTypesUser.USER_LOGIN_FAIL:
      return { ...state, loading: false, error: true };
    case ActionTypesUser.USER_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
