export const Loading = () => {
  return (
    <div className='vh-100 pb-5 d-flex justify-content-center align-items-center'>
      <div className='spinner-grow text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};
