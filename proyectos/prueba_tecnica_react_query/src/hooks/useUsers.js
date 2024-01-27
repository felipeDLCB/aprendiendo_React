import { fetchUsers } from '../services/fetchUsers'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useUsers = () => {
    const {
        data,
        error,
        status,
        refetch,
        isError,
        isLoading,
        fetchNextPage,
        hasNextPage
      } = useInfiniteQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        refetchOnWindowFocus: false,
      })
    
    return {
        refetch,
        isError,
        isLoading,
        //users: data?.pages.flatMap(page => page.results) ?? [],
        users: data?.pages.flatMap(page => page.users) ?? [],
        status,
        error,
        fetchNextPage,
        hasNextPage
    }
}