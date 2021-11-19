import "../css/Home.css";
import Movie from "./Movie";
import Header from "./Header";
import React from "react";
import axios from "axios";
import NoMovieFound from "./NoMovieFound";
import SpinnerScreen from "./SpinnerScreen";

function Home() {
  const [title, setTitle] = React.useState("");
  const [ratingValue, setRatingValue] = React.useState(0);
  const [movieList, setMovieList] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const url = !title
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`
      : `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${title}&page=${pageNumber}&include_adult=false`;

    const getMovies = async () => {
      try {
        const response = await axios.get(url);
        setMovieList((movies) => [...movies, ...response.data.results]);
        setIsLoading(false);
      } catch (error) {
        if (error) throw error;
      }
    };
    getMovies();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageNumber, title]);

  const handleSearch = (inputTitle) => {
    // setRatingValue(0);
    setMovieList([]);
    setPageNumber(1);
    setTitle(inputTitle);
  };

  const handleRating = (rating) => {
    console.log(rating);
    setTitle("");
    setRatingValue(rating);
  };

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      console.log("Sumando +1 a page");
      setPageNumber((number) => number + 1);
      setIsLoading(true);
    }
  };

  return (
    <div>
      <Header
        title={title}
        handleSearch={handleSearch}
        handleRating={handleRating}
        ratingValue={ratingValue}
      />
      <div className="container">
        <div className="row">
          {movieList.length === 0 && <NoMovieFound />}
          {movieList &&
            movieList.map((movie) => {
              console.log("map en el return de movielist");
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  overview={movie.overview}
                  title={movie.title}
                  image={movie.poster_path}
                  year={movie.release_date}
                />
              );
            })}
          {isLoading && movieList.map(() => <SpinnerScreen />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
