import { Reducer } from 'redux';
import { ActionTypesBrewery, BreweryState } from './types';
import { ActionTypesUser } from '@/store/ducks/user/types';

const INITIAL_STATE: BreweryState = {
  list: [],
  loading: false,
};

const reducer: Reducer<BreweryState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypesBrewery.GET_BREWERIES:
      return { ...state, loading: true };
    case ActionTypesBrewery.GET_BREWERIES_SUCCESS:
      return { ...state.list, list: action.payload, loading: false };
    case ActionTypesBrewery.GET_BREWERIES_FAIL:
      return INITIAL_STATE;
    case ActionTypesUser.USER_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
