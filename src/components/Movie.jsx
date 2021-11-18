import React from "react";
import "./Movie.css";
import Modal from "./Modal";
function Movie({ id, title, overview, year, image }) {
  const modal = `modal${id}`;
  return (
    <div
      data-bs-toggle="modal"
      data-bs-target={"#" + modal}
      className="col-lg-2 col-md-3 col-sm-4 col-xs-12 movie"
    >
      <h3>{title.length >= 14 ? title.substring(0, 18) : title}</h3>
      <div className="imgContainer">
        <img src={image} alt={title} />
      </div>
      <Modal
        modal={modal}
        title={title}
        year={year}
        image={image}
        overview={overview}
      />
    </div>
  );
}

export default Movie;
