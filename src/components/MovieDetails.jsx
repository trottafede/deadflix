import "../css/MovieDetails.css";
import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import SpinnerScreen from "./SpinnerScreen";
export default function MovieDetails() {
  const [movie, setMovie] = React.useState();
  let { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    const getMovieInfo = async () => {
      const foundMovie = await axios.get(url);
      setMovie(foundMovie.data);
    };
    getMovieInfo();
  }, [id]);

  return movie ? (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 movieDetails ">
          <div className="d-flex justify-content-end mt-3">
            <button
              className="btn btn-outline-danger  btn-sm"
              onClick={() => navigate(-1)}
            >
              <i class="fas fa-long-arrow-alt-left"></i> back
            </button>
          </div>
          <h3>{movie.title}</h3>
          <p>{movie.original_title}</p>
          <div className="imgContainer">
            <img
              src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
              alt={movie.title}
            />
          </div>
          <p>
            <em>Tagline: </em>
            {movie.tagline}
          </p>

          <p>
            <em>Genres:</em> {movie.genres.map((genre) => genre.name + " ")}
          </p>

          <p>
            <em>Release date:</em> {movie.release_date} - <em>Status: </em>{" "}
            {movie.status === "Released" ? (
              <span className="greenColor"> {movie.status} </span>
            ) : (
              <span className="redColor"> {movie.status} </span>
            )}
          </p>
          <p>
            <em>Popularity:</em> {movie.popularity}
          </p>
          <p>
            <em>
              Overview: <br />
            </em>
            {movie.overview}
          </p>
          <p>
            <em>Budget:</em> {movie.budget}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <SpinnerScreen />
          </div>
        </div>
      </div>
    </div>
  );
}
