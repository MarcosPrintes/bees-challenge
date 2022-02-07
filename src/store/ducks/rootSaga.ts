import { all, takeLatest } from 'redux-saga/effects';

import { ActionTypesBrewery } from './breweries/types';

import { sagaGetBreweries } from './breweries/sagas';

export default function* rootSaga() {
  yield all([takeLatest(ActionTypesBrewery.GET_BREWERIES, sagaGetBreweries)]);
}
