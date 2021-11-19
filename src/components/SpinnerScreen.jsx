import React from "react";

export default function SpinnerScreen() {
  const spinner = (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border"
        style={{
          padding: "30px",
        }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 movie ">
      <h3>Cargando...</h3>
      <div
        className=" d-flex flex-column justify-content-center "
        style={{ height: "200px" }}
      >
        {spinner}
      </div>
    </div>
  );
}
