import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    removeFromWatched,
    moveToWatchlist,
  } = useContext(GlobalContext);

  return (
    <div className='inner-card-controls'>
      {type === "watchlist" && (
        <>
          <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
            <i className='fa-fw fa fa-eye'></i>
          </button>
          <button
            className='ctrl-btn'
            onClick={() => removeMovieFromWatchlist(movie.id)}>
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            className='ctrl-btn'
            onClick={() => moveToWatchlist(movie.id)}>
            <i className='fa-fw fa fa-eye'></i>
          </button>
          <button
            className='ctrl-btn'
            onClick={() => removeFromWatched(movie.id)}>
            <i className='fa-fw fa fa-times'></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
