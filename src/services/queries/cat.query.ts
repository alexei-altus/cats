import { useInfiniteQuery,useMutation,useQuery,useQueryClient } from '@tanstack/react-query';
import {
  type Cat,
  type GetCatsProps,
} from '@/types/cat';
import { getCats } from '../api/cat.service';

export const useCatsQuery = (params: GetCatsProps) =>
  useQuery<Cat[]>({queryKey: ['getCats'], queryFn: async () => {
    const res = await getCats(params);
    return res;
  }});

export const useInfiniteCatsQuery = (params: GetCatsProps) =>
  useInfiniteQuery({
    queryKey: ['getInfiniteCats'],
    queryFn: async () => {
      const res = await getCats(params);
      return res;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) {
        return null;
      }
      return allPages.length + 1;
    },
  });

export const useCatPostMutation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({mutationFn: async (cat: Cat) => {
    // eslint-disable-next-line no-console
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Cat added');
      }, 2000);
    });
  }, onSuccess: () => {
    console.log('onSuccess');
    queryClient.invalidateQueries({queryKey: ['getCats']});
  }});
}
