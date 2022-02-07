import { combineReducers } from 'redux';

import user from './user/reducer';
import breweries from './breweries/reducer';

export default combineReducers({
  user,
  breweries,
});
