export const GET_COMICS = "GET_COMICS";
export const GET_COMICS_BY_NAME = "GET_COMICS_BY_NAME";
export const CLEAN_COMICS = "CLEAN_COMICS";
export const getComics = () => {
  return async function (dispatch) {
    const response = await fetch(
      "https://gateway.marvel.com:443/v1/public/comics?ts=1&format=digital%20comic&formatType=comic&noVariants=true&dateRange=2010-01-01%2C2023-01-01&orderBy=onsaleDate&limit=100&apikey=da9db239ac192993344d9b661a4cf23a&hash=2e9ddca8f096b65c3be62fc4c64a2df4"
    );
    const data = await response.json();
    dispatch({ type: GET_COMICS, payload: data.data.results });
  };
};

export const getComicsByName = (comicName) => {
  return {
    type: GET_COMICS_BY_NAME,
    payload: comicName,
  };
};

export const cleanComics = () => {
  return {
    type: CLEAN_COMICS,
  };
};
