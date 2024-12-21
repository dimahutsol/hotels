import axios, { AxiosResponse } from 'axios';

import { BASE_URL } from '../utils/constants/apiBaseUrl';
import { Hotel } from '../types/hotel';

axios.defaults.baseURL = BASE_URL;

const simulatePending = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getHotels = async (): Promise<Hotel[]> => {
  await simulatePending(500);

  const response: AxiosResponse<Hotel[]> = await axios.get('/src/mock/hotels.json');

  const { data } = response;

  return data;
};

export const getHotelById = async (id: string): Promise<Hotel | null> => {
  await simulatePending(500);

  const response: AxiosResponse<Hotel[]> = await axios.get('/src/mock/hotels.json');

  const { data } = response;

  const res = data.find(hotel => hotel.id.toString() === id);

  return res ? res : null;
};
