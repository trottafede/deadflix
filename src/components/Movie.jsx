import React from "react";
import "../css/Movie.css";
import SpinnerScreen from "./SpinnerScreen";
import { NavLink } from "react-router-dom";

export default function Movie({ id, title, overview, year, image }) {
  const [loading, setLoading] = React.useState(true);
  const imageToRender = image
    ? "https://image.tmdb.org/t/p/original" + image
    : "https://cdn.pixabay.com/photo/2015/01/11/07/03/moe-595955_960_720.png";

  React.useEffect(() => {
    setTimeout(() => {
      handleLoad();
    }, 1500);
  }, []);

  const handleLoad = () => {
    setLoading(false);
  };
  return loading ? (
    <SpinnerScreen />
  ) : (
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 movie">
      <NavLink activeClassName="active" to={"pelicula/" + id}>
        <h3>{title.length >= 14 ? title.substring(0, 18) : title}</h3>
        <div className="imgContainer">
          <img src={imageToRender} alt={title} />
        </div>
      </NavLink>
    </div>
  );
}
