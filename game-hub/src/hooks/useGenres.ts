import { useQuery } from "@tanstack/react-query"
import genres from "../data/genres"
import ms from 'ms'
import APIClient from "../services/api-client"
import Genre from "../entities/Genre"

const apiClient = new APIClient<Genre>('/genres')

// const useGenres = () => ({ data: genres, isLoading: false, error: null })
/**
 * By using react query, the genres data will be stored 24h
 * And before the time expires, it won't make a request
 */
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData: genres
})

export default useGenres