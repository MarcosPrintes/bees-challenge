import axios, { AxiosResponse } from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openbrewerydb.org',
});

export const getBreweries = async (page: number) => {
  const response = await api.get<AxiosResponse>(
    `/breweries?per_page=9&page=${page}`,
  );

  return response.data;
};
