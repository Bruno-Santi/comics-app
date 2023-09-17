import { usePaginate } from "../hooks/usePaginate";
import { ComicCard, Loading, Pagination } from "./index";

export const Comics = () => {
  const { handlePageClick, currentItems, pageCount } = usePaginate();

  return (
    <div>
      <div className='row rows-cols-1 p-5 row-cols-sm-4 w-75 justify-content-center mx-auto g-4'>
        {!currentItems ? (
          <Loading />
        ) : (
          currentItems !== null &&
          currentItems.map((comic) => (
            <ComicCard key={comic.id} {...comic} />
          ))
        )}
      </div>
      {pageCount > 1 && (
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={pageCount}
        />
      )}
    </div>
  );
};
