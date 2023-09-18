import {
  CLEAN_COMICS,
  GET_COMICS,
  GET_COMICS_BY_NAME,
  GET_COMIC_BY_ID,
  GET_CHARACTERS,
} from "./action";

const initialState = {
  comics: [],
  comicsBackup: [],
  comicById: [],
  characters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMICS:
      return {
        ...state,
        comics: action.payload,
        comicsBackup: action.payload,
      };
    case GET_COMICS_BY_NAME:
      // eslint-disable-next-line no-case-declarations
      const comicsByName = state.comics.filter((comic) => {
        return comic.title
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        comics: comicsByName,
      };
    case GET_COMIC_BY_ID:
      // eslint-disable-next-line no-case-declarations
      const filteredComic = state.comics.filter(
        (comic) => comic.id == Number(action.payload)
      );
      return {
        ...state,
        comicById: filteredComic,
      };
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case CLEAN_COMICS:
      return action.payload === "cleanID"
        ? {
            ...state,
            comicById: [],
            characters: [],
          }
        : {
            ...state,
            comics: state.comicsBackup,
          };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
