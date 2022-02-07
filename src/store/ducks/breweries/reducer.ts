import { Reducer } from 'redux';
import { ActionTypesBrewery, BreweryState } from './types';

const INITIAL_STATE: BreweryState = {
  list: [],
};

const reducer: Reducer<BreweryState> = (state = INITIAL_STATE, action) => {
  console.log('reducer');
  switch (action.type) {
    case ActionTypesBrewery.GET_BREWERIES:
      return { ...state };
    case ActionTypesBrewery.GET_BREWERIES_SUCCESS:
      console.log('reducer', action);
      return { ...state, list: action.payload };
    case ActionTypesBrewery.GET_BREWERIES_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
