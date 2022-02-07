import { call, put } from 'redux-saga/effects';

import { getBreweries } from '@/services/api';

import { actionGetBreweriesSuccess, actionGetBreweriesFail } from './actions';
import { Brewery } from './types';

export function* sagaGetBreweries(): Generator {
  try {
    const response = yield call(getBreweries);
    yield put(actionGetBreweriesSuccess(response as Brewery[]));
    console.log('success saga');
  } catch (error) {
    console.log(error);
    yield put(actionGetBreweriesFail());
  }
}
