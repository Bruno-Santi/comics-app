export const GET_COMICS = "GET_COMICS";
export const GET_COMICS_BY_NAME = "GET_COMICS_BY_NAME";
export const GET_COMIC_BY_ID = "GET_COMIC_BY_ID";
export const GET_CHARACTERS = "GET_CHARACTERS";
export const CLEAN_COMICS = "CLEAN_COMICS";

export const getComics = () => {
  return async function (dispatch) {
    const response = await fetch(
      "https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=false&ts=1&format=digital%20comic&formatType=comic&noVariants=true&dateRange=2016-01-01%2C2023-01-01&orderBy=onsaleDate&limit=100&apikey=da9db239ac192993344d9b661a4cf23a&hash=2e9ddca8f096b65c3be62fc4c64a2df4"
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

export const getComicById = (id) => {
  return {
    type: GET_COMIC_BY_ID,
    payload: id,
  };
};

export const getCharactersByComicId = (id) => {
  return async function (dispatch) {
    const response = await fetch(
      `      https://gateway.marvel.com:443/v1/public/comics/${id}/characters?ts=1&orderBy=name&apikey=da9db239ac192993344d9b661a4cf23a&hash=2e9ddca8f096b65c3be62fc4c64a2df4

`
    );
    const data = await response.json();
    dispatch({ type: GET_CHARACTERS, payload: data.data.results });
  };
};

export const cleanComics = (x = null) => {
  return {
    type: CLEAN_COMICS,
    payload: x,
  };
};
