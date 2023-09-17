import { dateFormatter, thumbnailFormatter } from "../helpers";

// eslint-disable-next-line react/prop-types
export const ComicCard = ({ title, thumbnail, dates }) => {
  const imagePath = thumbnailFormatter(thumbnail);
  const date = dateFormatter(dates);
  return (
    <div className='col animate__animated animate__fadeIn '>
      <div className='card'>
        <img
          src={imagePath}
          className='card-img '
          alt={`${title} + Comic App`}
        />
        <div className='row no-gutters'>
          <div className='col-4'></div>
          <div className='col-10'>
            <div className='card-body'>
              <h5 className='card-title '>{title}</h5>
              <div className='d-flex'>
                <p className='card-text'>Sale date:</p>
                <p className='card-text'>{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
