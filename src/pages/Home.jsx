import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../redux/action";

export const Home = () => {
  const dispatch = useDispatch();

  let comics = useSelector((state) => state.comics);

  useEffect(() => {
    dispatch(getComics()).then(console.log(comics));
  }, []);

  return (
    <>
      <h1>Estamos en home</h1>
    </>
  );
};
