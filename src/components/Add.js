import React, { useState } from "react";
import debounce from "../DebounceHelp";
import { ResultCard } from "./ResultCard";

const Add = () => {
  // const [name, setName] = useState("");
  const [results, setResults] = useState([]);

  const UpdateBody = debounce((e) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }, 1000);

  console.log(results);

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Search for a movie'
              onChange={UpdateBody}
            />
          </div>
          {results.length > 0 && (
            <ul className='results'>
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
