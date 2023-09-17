import {
  CLEAN_COMICS,
  GET_COMICS,
  GET_COMICS_BY_NAME,
} from "./action";

const initialState = {
  comics: [],
  comicsBackup: [],
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
      const comicsByName = state.comics.filter((comic) => {
        return comic.title.includes(action.payload);
      });
      return {
        ...state,
        comics: comicsByName,
      };
    case CLEAN_COMICS:
      return {
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
