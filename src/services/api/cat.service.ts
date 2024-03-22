import { api } from '@/lib/api';
import {
  type Cat,
  type GetCatsProps,
} from '@/types/cat';

export const getCats = async (
  params: GetCatsProps
): Promise<Cat[]> => {
  const { page } = params;
  const { data } = await api.get<Cat[]>(
    `https://api.thecatapi.com/v1/images/search?limit=${page*10}`
  );
  return data;
};
