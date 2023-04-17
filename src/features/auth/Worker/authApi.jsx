import { apiSlice } from "../../../app/api/authApi";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    workerLogin: builder.mutation({
      query: (data) =>  ({
        url: "workers/login",
        method: "POST",
        body: data
      }),
      transformResponse: (response, meta, args) => response.data
    }),
    workerRegister: builder.mutation({
      query: (data) =>  ({
        url: "workers/register",
        method: "POST",
        body: data
      }),

      transformResponse: (response, meta, args) => response.data
    }),

    getWorkerProfile: builder.query({
      query: () =>  ({
        url: `workers/get/profile`
      }),

      transformResponse: (response, meta, args) => response.data
    }),
  })
})

export const { useWorkerLoginMutation, useWorkerRegisterMutation, useGetWorkerProfileQuery } = authApi 