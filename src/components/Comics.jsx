import { usePaginate } from "../hooks/usePaginate";
import { ComicCard, Loading, Pagination, SearchComic } from "./index";

export const Comics = () => {
  const { handlePageClick, currentItems, pageCount } = usePaginate();

  return (
    <div>
      <SearchComic />
      <div className='row rows-cols-1 p-5 row-cols-sm-4 w-75 mx-lg-auto g-3'>
        {!currentItems ? (
          <Loading />
        ) : (
          currentItems !== null &&
          currentItems.map((comic) => (
            <ComicCard key={comic.id} {...comic} />
          ))
        )}
      </div>

      <Pagination
        handlePageClick={handlePageClick}
        pageCount={pageCount}
      />
    </div>
  );
};
