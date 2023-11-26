import { baseApi } from '@/redux/api/EmptyBaseApi';
import { ApplicationInfo } from "@/dtos/ApplicationInfo";
import {FilesInfo} from "@/dtos/FilesInfo";

export const applicationApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getApplications: builder.query<
      ApplicationInfo[], void
    >({
      query: data => `/applications`,
      providesTags: ['applications'],
    }),
    getApplicationByID: builder.query<ApplicationInfo, number>({
      query: id => `/applications/${id}`,
      providesTags: ['applications'],
    }),
    getFilesById: builder.query<FilesInfo, number>({
      query: id => `/files/${id}`,
      providesTags: ['applications'],
    }),
  }),
});

export const {
  useGetApplicationsQuery: useGetApplications,
  useGetApplicationByIDQuery: useGetApplicationByID,
  useGetFilesByIdQuery: useGetFilesByID
} = applicationApi;
