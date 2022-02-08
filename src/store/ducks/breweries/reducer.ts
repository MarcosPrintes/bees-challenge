import { Reducer } from 'redux';
import { ActionTypesBrewery, BreweryState } from './types';

const INITIAL_STATE: BreweryState = {
  list: [],
  loading: false,
};

const reducer: Reducer<BreweryState> = (state = INITIAL_STATE, action) => {
  console.log('reducer');
  switch (action.type) {
    case ActionTypesBrewery.GET_BREWERIES:
      return { ...state, loading: true };
    case ActionTypesBrewery.GET_BREWERIES_SUCCESS:
      return { ...state.list, list: action.payload, loading: false };
    case ActionTypesBrewery.GET_BREWERIES_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
