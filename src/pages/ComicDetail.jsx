import { useEffect, useState } from "react";
import {
  cleanComics,
  getComicById,
  getCharactersByComicId,
} from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../components/index";
import { thumbnailFormatter } from "../helpers";
import "animate.css";
export const ComicDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [thumbnail, setThumbnail] = useState("");
  const [backing, setBacking] = useState(false);
  const conditionalClassName = backing
    ? "row mt-5 animate__animated animate__fadeOutLeft animate__faster"
    : "row mt-5 animate__animated animate__fadeInLeft animate__fast";

  const onNavigateBack = () => {
    setBacking(true);
    setTimeout(() => {
      navigate(-1);
    }, 400);
  };
  const dispatch = useDispatch();
  const comic = useSelector(({ comicById }) => comicById[0]);
  let characters = useSelector(({ characters }) => characters);

  useEffect(() => {
    dispatch(getComicById(id));
    dispatch(getCharactersByComicId(id)).then(() =>
      console.log(characters)
    );

    return () => {
      dispatch(cleanComics("cleanID"));
    };
  }, []);

  useEffect(() => {
    setThumbnail(thumbnailFormatter(comic?.thumbnail));
  }, [comic]);

  return (
    <div className=''>
      {!comic ? (
        <Loading />
      ) : (
        <div
          className={`row w-100  d-flex justify-content-center mx-auto my-5 ${conditionalClassName}`}
        >
          <div className='col-md-3'>
            <img
              src={thumbnail}
              alt={`${comic.title} detail`}
              className='img-thumbnail'
            />
          </div>
          <div className='col-md-8 w-50 w-sm-100'>
            <h3 className='my-5' style={{ fontFamily: "Lilita One" }}>
              {comic.title}
            </h3>
            <div className='description '>
              {comic.description && (
                <>
                  {" "}
                  <h5
                    className='title'
                    style={{ fontWeight: "bold" }}
                  >
                    Description:
                  </h5>
                  <p className=''>{comic.description}</p>{" "}
                </>
              )}
            </div>
            {characters && (
              <div className='characters'>
                <h5
                  className={
                    characters.length
                      ? "font-weight-bold title"
                      : "d-none"
                  }
                  style={{ fontWeight: "bold" }}
                >
                  Characters:
                </h5>
                <ul className='list-group'>
                  {characters.map((char) => (
                    <li
                      key={char.name}
                      className='list-group-item w-25 w-sm-100'
                    >
                      {char.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className='btn btn-danger my-4'
              onClick={() => onNavigateBack()}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
