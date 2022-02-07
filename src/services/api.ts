import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openbrewerydb.org',
});

export const getBreweries = async () => {
  const response = await api.get<AxiosResponse>('/breweries');

  return response.data;
};
