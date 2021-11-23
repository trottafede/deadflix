import React from "react";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 aboutAs">
          <h1>About this project</h1>
          <p>
            This project was made based on a Hack Academy exercise. It is called
            Deadflix because it was made near Halloween.
          </p>

          <p>It was made with:</p>
          <ul>
            <li>React.Js</li>
            <li>React Router v6</li>
            <li>Bootstrap 5</li>
            <li>Axios for making the ajax call to the api</li>
            <li>The Movie DB API </li>
            <li>Infinite Scroll in home page</li>
          </ul>

          <div className="imgContainer">
            <img
              height="50px"
              width="50px"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="the movie db svg"
            />
            <img
              style={{
                borderRadius: "30px",
              }}
              height="50px"
              width="50px"
              src="https://ha.edu.uy/img/hackacademy_ogimage_1200x1200.png"
              alt="the movie db svg"
            />
            <img
              height="50px"
              width="50px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              alt="the movie db svg"
            />
            <img
              height="50px"
              width="50px"
              src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg"
              alt="the movie db svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
