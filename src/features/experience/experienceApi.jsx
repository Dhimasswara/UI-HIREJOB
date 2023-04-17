import { apiSlice } from '../../app/api/authApi';

export const experienceApi = apiSlice.injectEndpoints({
  tagTypes: ['getExperienceById'],
  endpoints: (builder) => ({
    getExperienceById: builder.query({
      query: (id) => ({
        url: `experience/worker/${id}`,
      }),

      providesTags: ['getExperienceById'],
      transformResponse: (response, meta, args) => response.data,
    }), 
    createExperience: builder.mutation({
      query: ({id, data}) => ({
        url: `experience/add/${id}`,
        method: "POST",
        body: data
      }),

      providesTags: ['getExperienceById'],
      transformResponse: (response, meta, args) => response.data,
    }), 
    deleteExperience: builder.mutation({
      query: (id) => ({
        url: `experience/delete/${id}`,
        method: "DELETE",
      }),

      providesTags: ['getExperienceById'],
      invalidatesTags: ['getExperienceById', 'getWorkerById'],
      transformResponse: (response, meta, args) => response.data,
    }), 
  }),
});

export const { useGetExperienceByIdQuery, useCreateExperienceMutation, useDeleteExperienceMutation } = experienceApi;