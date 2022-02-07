import { action } from 'typesafe-actions';
import { ActionTypesBrewery, Brewery } from './types';

export const actionGetBreweries = () =>
  action(ActionTypesBrewery.GET_BREWERIES);

export const actionGetBreweriesSuccess = (listBreweries: Brewery[]) => {
  console.log('success action', listBreweries);
  return action(ActionTypesBrewery.GET_BREWERIES_SUCCESS, listBreweries);
};

export const actionGetBreweriesFail = () =>
  action(ActionTypesBrewery.GET_BREWERIES_FAIL);
