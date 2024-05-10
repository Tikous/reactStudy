import { useQuery } from "@tanstack/react-query"
import genres from "../data/genres"
import APIClient from "../services/api-client"

const apiClient = new APIClient<Genre>('/genres')

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
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24h
  initialData: genres
})

export default useGenres