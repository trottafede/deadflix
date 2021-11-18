import "./Home.css";
import Movie from "./Movie";
// import movieList from "../data/movieList.json";
import Header from "./Header";
import React from "react";
import axios from "axios";

function Home() {
  const [search, setSearch] = React.useState("");
  const [ratingValue, setRatingValue] = React.useState(0);
  const [movieList, setMovieList] = React.useState([]);

  let list;
  let filteredMovies;
  const api_key = "d31155cbf820bd18cd5b553ec0cb5b0f";
  let page = 1;
  let requestLink = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;

  React.useEffect(() => {
    axios
      .get(requestLink)
      .then(function (response) {
        setMovieList(response.data.results);
      })
      .catch(function (error) {
        if (error) throw error;
      })
      .then(function () {
        // always executed
      });
  }, [requestLink]);

  if (ratingValue !== 0) {
    filteredMovies = movieList.filter((movie) => {
      console.log("filtered movies by rating");
      return movie.vote_average >= ratingValue * 2;
    });
  } else {
    filteredMovies = movieList.filter((movie) => {
      console.log("filtered movies");
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  filteredMovies.length > 0
    ? (list = filteredMovies.map((movie) => {
        console.log("filtered movies > 0");
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            overview={movie.overview}
            title={movie.title}
            image={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
            year={movie.release_date}
          />
        );
      }))
    : (list = (
        <Movie
          key={1}
          id={53}
          overview={"No hay esto wei"}
          title={"No hay eso wei"}
          image={
            "https://cdn.pixabay.com/photo/2015/01/11/07/03/moe-595955_960_720.png"
          }
        />
      ));

  const searchMovie = (movie) => {
    setRatingValue(0);
    setSearch(movie.toLowerCase());
  };

  const handleRating = (rating) => {
    console.log(rating);
    setSearch("");
    setRatingValue(rating);
  };

  return (
    <div>
      <Header
        search={search}
        searchMovie={searchMovie}
        handleRating={handleRating}
        ratingValue={ratingValue}
      />
      <div className="container">
        <div className="row">{list}</div>
      </div>
    </div>
  );
}

export default Home;
