import { useSearch } from "../hooks/useSearch";

export const SearchComic = () => {
  const {
    handleSubmit,
    handleChange,
    handleRestore,
    error,
    searchValue,
  } = useSearch();

  return (
    <div className='my-4 d-flex align-items-center justify-content-center'>
      <div className='d-flex p-2'>
        <form onSubmit={handleSubmit}>
          <div className='d-flex'>
            <input
              type='text'
              className='form-control'
              placeholder='Search a comic'
              onChange={handleChange}
              value={searchValue}
            />
            <button className='btn btn-danger ml-2'>Search</button>
          </div>
          {error && (
            <div className='alert alert-warning mt-2' role='alert'>
              {error}
            </div>
          )}
        </form>
        <button
          onClick={handleRestore}
          className='btn btn-outline-info h-25'
        >
          Restore
        </button>
      </div>
    </div>
  );
};
