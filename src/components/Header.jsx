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
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">
              Deadflix
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
