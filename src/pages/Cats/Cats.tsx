import { useMemo } from 'react';
import { useCatPostMutation,useCatsQuery } from '@/services/queries/cat.query';
import { type Cat } from '@/types/cat';

export type Filter = { page: number; search?: string };

export interface CatListProps {
  cats: Cat[];
}

const CatList: React.FC<CatListProps> = ({ cats }) => {
  if (!cats?.length) {
    return <div>No cats found</div>;
  }

  return (
    <>
      {cats.map((cat) => (
        <div
          key={cat.id}
          className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        >
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href={cat.url} target="_blank" rel="noreferrer">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src={cat.url}
              />
            </a>
          </article>
        </div>
      ))}
    </>
  );
}

const Cats = () => {
  const filter = useMemo(() => ({ page: 1 }), []);

  const { isPending, isError, data, error } = useCatsQuery(filter);
  const catPostMutation = useCatPostMutation();

  if(isError) {
    return <div>Error: {error?.message}</div>
  }

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex justify-end">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => { catPostMutation.mutate({ id: new Date().toString(), width: 0, hieght: 0, url: '', breeds:[] }) }}
        >
          Create Cat
        </button>
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {isPending ? (
          <div>Loading...</div>
        ) : (
          <CatList cats={data ?? []} />
        )}
      </div>
    </div>
  );
}

export default Cats;
