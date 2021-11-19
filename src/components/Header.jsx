import "../css/Header.css";
import Search from "./Search";
import Rating from "react-rating";
import React from "react";
function Header({ title, handleSearch, handleRating, ratingValue }) {
  const handleClick = (rating) => {
    handleRating(rating);
  };
  return (
    <header>
      <div id="imgContainer">
        <div className="imgBg ">
          <h1>¡Tus peliculas favoritas!</h1>
          <div id="searcherContainer" className="mb-3">
            <Search title={title} handleSearch={handleSearch} />
          </div>
        </div>
      </div>

      <div className="ratingContainer">
        {!title && (
          <Rating
            onClick={handleClick}
            initialRating={ratingValue}
            className="starColor"
            emptySymbol="far fa-star fa-2x"
            fullSymbol="fas fa-star fa-2x"
          />
        )}
      </div>
    </header>
  );
}

export default Header;
