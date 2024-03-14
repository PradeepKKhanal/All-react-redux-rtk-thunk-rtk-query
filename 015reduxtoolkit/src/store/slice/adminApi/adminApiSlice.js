import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const adminApi=createApi({
    reducerPath:'admin',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3000/'
    }),
    tagTypes:['Albums'],
    endpoints:(builder)=>({
        getAccountById:builder.query({
            query:()=>`accounts`,
            providesTags:['Albums']
        }),
        putAccountById:builder.mutation({
            query:(amount)=>({
                url:'accounts',
                method:'POST',
                body:amount
            }),
            invalidatesTags:['Albums']
        }),
        updateAccountById:builder.mutation({
            query:({id,amount})=>({
                url:`accounts/${id}`,
                method:'PUT',
                body:{amount}
            }),
            invalidatesTags:['Albums']
        }),
        deleteAccountById:builder.mutation({
            query:(id)=>({
                url:`accounts/${String(id)}`,
                method:'DELETE'
            }) ,
            invalidatesTags:['Albums']       
        })
        
    })
})

export const {useGetAccountByIdQuery,usePutAccountByIdMutation,useUpdateAccountByIdMutation,useDeleteAccountByIdMutation }=adminApi