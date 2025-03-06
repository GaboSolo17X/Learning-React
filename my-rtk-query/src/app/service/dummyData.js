import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath:"products",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
    endpoints: (builder)=>({

        //Get all products
            getAllProducts:builder.query({
                query:()=>'/products',
            }),

        //Get product by Id
        getProductById:builder.query({
            query:(id)=>`/products/${id}`,
        }),

        //Add new product
        addNewProduct: builder.mutation({
            query:(newProduct)=>({
                url:`/products/add`,
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:newProduct
            })
        }),

                //Add new product
        updateProduct: builder.mutation({
            query:({id,updatedProduct})=>({
                url:`/products/${id}`,
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:updatedProduct
            })
        })
    })
});



export const {useGetAllProductsQuery, useGetProductByIdQuery, useAddNewProductMutation, useUpdateProductMutation} = productsApi;