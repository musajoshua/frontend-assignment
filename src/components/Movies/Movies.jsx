import React from "react";
import Movie from "../Movie/Movie";

function Movies({ movies, openModal }) {
  return (
    <div className="movies--grid">
      {movies?.length > 0 ? (
        movies.map((movie, idx) => (
          <Movie key={idx} movie={movie} openModal={openModal} />
        ))
      ) : (
        <p>No Movie Found</p>
      )}
    </div>
  );
}

export default Movies;
