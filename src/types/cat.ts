export interface GetCatsResponse {
  status: string;
  totalResults: number;
  results: Cat[];
  nextPage?: number;
}

export interface GetCatsProps {
  page: number;
}

export interface Cat {
  id: string;
  width: number;
  hieght: number;
  url: string;
  breeds: CatBreed[];
}

export interface CatBreed {
  name: string;
  temperament: string;
  origin: string;
}
