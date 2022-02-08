import { actionGetBreweries } from '@/store/ducks/breweries/actions';
import { call, put, select, StrictEffect } from 'redux-saga/effects';

import { getBreweries } from '@/services/api';

import { actionGetBreweriesSuccess, actionGetBreweriesFail } from './actions';

import { State } from '@/store';

export function* sagaGetBreweries({
  payload,
}: ReturnType<typeof actionGetBreweries>): Generator<StrictEffect, void, any> {
  try {
    const getList = (state: State) => state.breweries;
    const { list }: ReturnType<typeof getList> = yield select(getList);

    const response = yield call(getBreweries, payload);

    const newList = [...list, ...response];

    yield put(actionGetBreweriesSuccess(newList));
  } catch (error) {
    yield put(actionGetBreweriesFail());
  }
}
