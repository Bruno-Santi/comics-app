import ReactPaginate from "react-paginate";

export const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='next >'
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel='< previous'
      renderOnZeroPageCount={null}
    />
  );
};
