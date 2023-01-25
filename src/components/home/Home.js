import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../hero/Hero";

const Home = ({ movies }) => {
  return (
    <div>
      <Hero movies={movies} />
    </div>
  );
};

export default Home;
