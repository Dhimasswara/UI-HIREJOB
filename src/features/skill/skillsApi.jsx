import { apiSlice } from '../../app/api/authApi';

export const skillsApi = apiSlice.injectEndpoints({
  tagTypes: ['getReceiverById'],
  endpoints: (builder) => ({
    getSkillsById: builder.query({
      query: (id) => ({
        url: `skills/worker/${id}`,
      }),

      providesTags: ['getSkillsById'],
      transformResponse: (response, meta, args) => response.data,
    }), 
    createSkills: builder.mutation({
      query: ({id, data}) => ({
        url: `skills/addskills/${id}`,
        method: "POST",
        body: data
      }),

      providesTags: ['getSkillsById'],
      transformResponse: (response, meta, args) => response.data,
    }), 
    deleteSkills: builder.mutation({
      query: (id) => ({
        url: `skills/delete/${id}`,
        method: "DELETE",
      }),

      providesTags: ['getSkillsById'],
      invalidatesTags: ['getSkillsById', 'getWorkerById'],
      transformResponse: (response, meta, args) => response.data,
    }), 
  }),
});

export const { useGetSkillsByIdQuery, useCreateSkillsMutation, useDeleteSkillsMutation} = skillsApi;