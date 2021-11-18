import React from "react";

function Modal({ modal, title, year, image, overview }) {
  return (
    <div
      className="modal fade"
      id={modal}
      tabIndex="-1"
      aria-labelledby="Modal_de_la_movie"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content bgBlood">
          <div className="modal-header">
            <h5 className="modal-title" id="Modal_de_la_movie">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <h6>{year}</h6>
            <img
              src={"https://image.tmdb.org/t/p/original/" + image}
              alt={title}
            />
            <p>{overview}</p>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
