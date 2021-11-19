import React from "react";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="imgContainer">
        <img
          height="400px"
          width="auto"
          src="https://www.downloadclipart.net/large/plants-vs-zombies-png-photo.png"
          alt=""
        />
      </div>
      <h3>
        <span style={{ color: "red" }}>404: </span> Sorry, we did not find that
      </h3>
    </div>
  );
};

export default NotFound;
