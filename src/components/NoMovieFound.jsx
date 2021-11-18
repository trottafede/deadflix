import React from "react";
export default function NoMovieFound() {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 movie">
      <h3>No hay eso wei</h3>
      <div className="imgContainer">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/11/07/03/moe-595955_960_720.png"
          alt="not_found"
        />
      </div>
    </div>
  );
}
