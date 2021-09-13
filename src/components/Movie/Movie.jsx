import React from "react";

function Movie({ movie, openModal }) {
  return (
    <div
      className="card"
      onClick={() => {
        openModal(movie);
      }}
    >
      <img
        className="card--image"
        src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}/${movie.poster_path}`}
        alt={movie.title}
      />
      <span className="card--rating">{movie.vote_average}</span>
      <div className="card--footer">
        <p>{movie.title}</p>
      </div>
    </div>
  );
}

export default Movie;
