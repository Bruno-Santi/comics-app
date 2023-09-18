/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { dateFormatter, thumbnailFormatter } from "../helpers";
import ComicCardStyle from "../styles/ComicCardStyle.css";
// eslint-disable-next-line react/prop-types

export const ComicCard = ({ id, title, thumbnail, dates }) => {
  const imagePath = thumbnailFormatter(thumbnail);
  const date = dateFormatter(dates);

  return (
    <div className='col animate__animated animate__fadeIn'>
      <div
        className='card shadow zoom-on-hover'
        style={{
          width: "18em",
          maxHeight: "700px",
          overflow: "",
        }}
      >
        <Link to={`/comics/${id}`}>
          <img
            src={imagePath}
            className='card-img flex-center'
            alt={`${title} + Comic App`}
          />
        </Link>
        <div className='row no-gutters'>
          <div className='col-4'></div>
          <div className='col-10'>
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>

              <div className='d-flex'>
                <strong className='card-text'>Sale date:</strong>
                <p className='card-text mx-2'>{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
