import { useEffect, useState } from "react";
import { cleanComics, getComicsByName } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

export const useSearch = () => {
  const dispatch = useDispatch();
  const comicsByName = useSelector(
    ({ comicsByName }) => comicsByName
  );
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) return setError("You must enter a name");
    setError(null);
    dispatch(getComicsByName(searchValue));
  };

  useEffect(() => {
    if (comicsByName?.length === 0)
      setError(`No matches with ${searchValue}`);
    return () => {
      setError();
    };
  }, [comicsByName]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    setError(null);
    if (!value) dispatch(cleanComics());
  };

  const handleRestore = () => {
    dispatch(cleanComics());
    setError(null);
    setSearchValue("");
  };
  return {
    error,
    handleSubmit,
    handleChange,
    searchValue,
    handleRestore,
  };
};
