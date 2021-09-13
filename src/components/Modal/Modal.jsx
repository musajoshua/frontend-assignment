import React from "react";
import moment from "moment";
import CloseIcon from "./../../images/close-icon.svg";

function Modal({ movie = {}, visible, closeModal }) {
  return (
    <div className={`modal ${visible ? "display-block" : "display-none"}`}>
      <div className="modal--body">
        <img
          src={CloseIcon}
          alt="icon"
          className="modal--closeicon"
          onClick={() => closeModal()}
        />
        <h1 className="modal--title">{movie?.title}</h1>
        <div className="modal--details">
          <img
            className="modal--image"
            src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}/${movie?.poster_path}`}
            alt={movie?.title}
          />
          <div>
            <p>
              <b>Released Date:</b>{" "}
              {moment(movie?.release_date).format("MMMM Do, YYYY")}
            </p>
            <p>{movie?.overview}</p>
            <p>
              <b>{movie?.vote_average}</b> / 10 ({movie?.vote_count} total
              votes)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
