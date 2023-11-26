import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from '@/redux/api/baseQuery';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: ['applications'],
  endpoints: () => ({}),
});
