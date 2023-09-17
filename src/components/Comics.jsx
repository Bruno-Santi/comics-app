import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../redux/action";
import { ComicCard } from "./ComicCard";
import { Loading } from "./Loading";

export const Comics = () => {
  const dispatch = useDispatch();

  let comics = useSelector((state) => state.comics);

  useMemo(() => {
    if (comics.length) return;
    dispatch(getComics());
  }, []);

  return (
    <div className='row rows-cols-1 p-5 row-cols-sm-3 w-75 justify-content-center mx-auto g-4'>
      {!comics.length ? (
        <Loading />
      ) : (
        comics?.map((comic) => (
          <ComicCard key={comic.id} {...comic} />
        ))
      )}
    </div>
  );
};
