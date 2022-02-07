export enum ActionTypesBrewery {
  GET_BREWERIES = '@user/GET_BREWERIES',
  GET_BREWERIES_SUCCESS = '@user/GET_BREWERIES_SUCCESS',
  GET_BREWERIES_FAIL = '@user/GET_BREWERIES_FAIL',
}

export interface BreweryState {
  list: Brewery[];
}

export interface Brewery {
  id: number;
  name: string;
  brewery_type: string;
  street: string;
  address_2?: string;
  address_3?: string;
  city: string;
  state: string;
  county_province?: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
}
