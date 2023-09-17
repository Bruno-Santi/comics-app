import { useState, useEffect } from "react";
import { getComics } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

export const usePaginate = () => {
  const dispatch = useDispatch();
  const comics = useSelector((state) => state.comics);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffSet, setItemOffSet] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    if (comics.length > 0) {
      setCurrentItems(
        comics.slice(itemOffSet, itemOffSet + itemsPerPage)
      );
      setPageCount(Math.ceil(comics.length / itemsPerPage));
    } else {
      dispatch(getComics());
    }
  }, [comics, dispatch, itemOffSet, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffSet = (event.selected * itemsPerPage) % comics.length;
    setItemOffSet(newOffSet);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    handlePageClick,
    pageCount,
    currentItems,
  };
};
