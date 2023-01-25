import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Reviews from "./components/reviews/Reviews";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";

function App() {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState({});
  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/movies");
      const data = await response.json();
      console.log("data", data);
      if (movies !== "undefined") {
        setMovies(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/movies/${movieId}`
      );
      const movieData = await response.json();
      if (movieData !== null) {
        setSingleMovie(movieData);
      }

      setReviews(singleMovie.reviewIds);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
    getMovieData();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />}></Route>
          <Route path="/Trailer/:ytTrailerLink" element={<Trailer />} />
          <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                setReviews={setReviews}
                reviews={reviews}
                getMovieData={getMovieData}
                movie={singleMovie}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
