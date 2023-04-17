import { apiSlice } from '../../app/api/authApi';

export const portfolioApi = apiSlice.injectEndpoints({
  tagTypes: ['getPortfolioById'],
  endpoints: (builder) => ({
    getPortfolioById: builder.query({
      query: (id) => ({
        url: `portfolio/worker/${id}`,
      }),

      providesTags: ['getPortfolioById'],
      transformResponse: (response, meta, args) => response.data,
    }), 
    createPortfolio: builder.mutation({
      query: ({id, data}) => ({
        url: `portfolio/addportfo/${id}`,
        method: "POST",
        body: data
      }),

      providesTags: ['getPortfolioById', 'getWorkerById'],
      invalidatesTags: ['getPortfolioById', 'getWorkerById'],
      transformResponse: (response, meta, args) => response.data,
    }), 
    deletePortfolio: builder.mutation({
      query: (id) => ({
        url: `portfolio/delete/${id}`,
        method: "DELETE",
      }),

      providesTags: ['getPortfolioById', 'getWorkerById'],
      invalidatesTags: ['getPortfolioById', 'getWorkerById'],
      transformResponse: (response, meta, args) => response.data,
    }), 
  }),
});

export const { useGetPortfolioByIdQuery, useCreatePortfolioMutation, useDeletePortfolioMutation } = portfolioApi;