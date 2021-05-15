import { useEffect, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// State

const intialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

//context

export const GlobalContext = createContext(intialState);

//Provider

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //actions
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  const moveToWatchlist = (id) => {
    dispatch({ type: "MOVE_TO_WATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
        addMovieToWatched,
        removeMovieFromWatchlist,
        removeFromWatched,
        moveToWatchlist,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
