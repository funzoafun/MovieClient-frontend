import React from "react";
import "./Trailer.css";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const Trailer = () => {
  const params = useParams();
  const key = params.ytTrailerLink;

  return (
    <div className="react-player-container">
      {key != null ? (
        <ReactPlayer
          controls="true"
          playing={true}
          url={`https://www.youtube.com/watch?v=${key}`}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
};

export default Trailer;
