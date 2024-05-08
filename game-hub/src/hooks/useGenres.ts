import { useQuery } from "@tanstack/react-query"
import genres from "../data/genres"
import apiClient from "../services/api-client"
import { FetchResponse } from "../services/api-client"

export interface Genre {
  id: number
  name: string
  image_background: string
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null })
/**
 * By using react query, the genres data will be stored 24h
 * And before the time expires, it won't make a request
 */
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => 
    apiClient
      .get<FetchResponse<Genre>>('/genres')
      .then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, // 24h
  initialData: { count: genres.length, results: genres }
})

export default useGenres