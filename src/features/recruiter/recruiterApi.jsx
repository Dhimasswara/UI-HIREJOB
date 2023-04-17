import { apiSlice } from '../../app/api/authApi';

export const recruiterApi = apiSlice.injectEndpoints({
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
    getRecruiterById: builder.query({
      query: (id) => ({
        url: `recruiters/${id}`,
      }),

      providesTags: ['getRecruiterById'],
      transformResponse: (response, meta, args) => response.data[0],
    }),
    updateRecruiterById: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `recruiters/${id}`,
          method: 'PUT',
          body: data,
        };
      },
      invalidatesTags: ['getRecruiterById'],
      transformResponse: (response, meta, args) => response,
    }),
  }),
});

export const { useGetAllUserQuery, useGetRecruiterByIdQuery, useUpdateRecruiterByIdMutation } = recruiterApi;