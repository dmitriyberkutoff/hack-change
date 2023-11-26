import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();
export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080',
  credentials: 'same-origin',

  prepareHeaders: (headers, api) => {
    headers.set('Access-Control-Allow-Credentials', 'true');
    headers.set(
      'Access-Control-Allow-Origin',
      'http://localhost:8080',
    );

    return headers;
  },
});
