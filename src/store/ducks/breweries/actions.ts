import { action } from 'typesafe-actions';
import { ActionTypesBrewery, Brewery } from './types';

export const actionGetBreweries = (page: number) =>
  action(ActionTypesBrewery.GET_BREWERIES, page);

export const actionGetBreweriesSuccess = (listBreweries: Brewery[]) => {
  return action(ActionTypesBrewery.GET_BREWERIES_SUCCESS, listBreweries);
};

export const actionGetBreweriesFail = () =>
  action(ActionTypesBrewery.GET_BREWERIES_FAIL);
