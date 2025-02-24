import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface TGetImgMap {
  position: Blob
}

const apiKey = 'd787d420-4733-4eae-ad87-71d1d124c9c5'; 

export const yandexApi = createApi({
    reducerPath: 'yandexApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://static-maps.yandex.ru/v1'
    }),
    endpoints: (builder) => ({
        getImgMap: builder.query<TGetImgMap, unknown>({
            query: (position) => `?ll=${position}&spn=0.3,0.3&size=300,300&apikey=${apiKey}`,
        }),
    }),
});

export const { useLazyGetImgMapQuery } = yandexApi