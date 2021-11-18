import "./Home.css";
import Movie from "./Movie";
import Header from "./Header";
import React from "react";
import axios from "axios";

function Home() {
  const [search, setSearch] = React.useState("");
  const [ratingValue, setRatingValue] = React.useState(0);
  const [movieList, setMovieList] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);

  let list;
  let filteredMovies;

  React.useEffect(() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`;
    axios
      .get(url)
      .then(function (response) {
        setMovieList((movies) => [...movies, ...response.data.results]);
      })
      .catch(function (error) {
        if (error) throw error;
      });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageNumber]);

  React.useEffect(() => {
    setPageNumber(1);
  }, [ratingValue, search]);
  // if (ratingValue !== 0) {
  //   filteredMovies = movieList.filter((movie) => {
  //     console.log("filtered movies by rating");
  //     return movie.vote_average >= ratingValue * 2;
  //   });
  // } else if (search !== "") {
  //   filteredMovies = movieList.filter((movie) => {
  //     console.log("filtered movies");
  //     return movie.title.toLowerCase().includes(search.toLowerCase());
  //   });
  // }

  list = movieList.map((movie) => {
    console.log("Map de movielist traidos de api");
    return (
      <Movie
        key={movie.id}
        id={movie.id}
        overview={movie.overview}
        title={movie.title}
        image={"https://image.tmdb.org/t/p/original" + movie.poster_path}
        year={movie.release_date}
      />
    );
  });
  // list = (
  //     <Movie
  //       key={1}
  //       id={53}
  //       overview={"No hay esto wei"}
  //       title={"No hay eso wei"}
  //       image={
  //         "https://cdn.pixabay.com/photo/2015/01/11/07/03/moe-595955_960_720.png"
  //       }
  //     />
  //   ));

  const searchMovie = (movie) => {
    setRatingValue(0);
    setSearch(movie.toLowerCase());
  };

  const handleRating = (rating) => {
    console.log(rating);
    setSearch("");
    setRatingValue(rating);
  };

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      console.log("Estas en scroll");
      setPageNumber((number) => number + 1);
    }
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
