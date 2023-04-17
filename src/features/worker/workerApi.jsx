import { apiSlice } from '../../app/api/authApi';

export const workerApi = apiSlice.injectEndpoints({
  tagTypes: ['getAllUser'],
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: ({find}) => {
        return {
        url: `/?search=${find}`,
      }},

      providesTags: ['getAllUser'],
      transformResponse: (response, meta, args) => response.data,
    }), 
    getWorkerById: builder.query({
      query: (id) => ({
        url: `workers/${id}`,
      }),

      providesTags: ['getWorkerById'],
      transformResponse: (response, meta, args) => response.data[0],
    }),
    updateWorkerById: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `workers/${id}`,
          method: 'PUT',
          body: data,
        };
      },
      invalidatesTags: ['getWorkerById'],
      transformResponse: (response, meta, args) => response,
    }),
  }),
});

export const { useGetAllUserQuery, useGetWorkerByIdQuery, useUpdateWorkerByIdMutation } = workerApi;