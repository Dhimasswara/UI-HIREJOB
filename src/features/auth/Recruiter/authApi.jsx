import { apiSlice } from "../../../app/api/authApi";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    recruiterLogin: builder.mutation({
      query: (data) =>  ({
        url: "recruiters/login",
        method: "POST",
        body: data
      }),

      transformResponse: (response, meta, args) => response.data
    }),
    recruiterRegister: builder.mutation({
      query: (data) =>  ({
        url: "recruiters/register",
        method: "POST",
        body: data
      }),

      transformResponse: (response, meta, args) => response.data
    }),

    getRecruiterProfile: builder.query({
      query: () =>  ({
        url: `recruiters/get/profile`
      }),

      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useRecruiterLoginMutation, useRecruiterRegisterMutation, useGetRecruiterProfileQuery } = authApi 