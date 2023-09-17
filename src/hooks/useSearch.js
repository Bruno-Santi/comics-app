import { useState } from "react";
import { cleanComics, getComicsByName } from "../redux/action";
import { useDispatch } from "react-redux";

export const useSearch = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) return setError("You must enter a name");
    setError(null);
    dispatch(getComicsByName(searchValue));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    setError(null);
    if (!value) dispatch(cleanComics());
  };

  return {
    error,
    handleSubmit,
    handleChange,
    searchValue,
  };
};
