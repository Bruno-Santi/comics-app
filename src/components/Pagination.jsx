/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";

export const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <div className='container justify-content-center d-flex my-4'>
      <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='<'
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        activeClassName='active'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
      />
    </div>
  );
};
