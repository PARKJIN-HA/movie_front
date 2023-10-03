import React from "react";
import styles from "./mainLayout.module.css";
import MoviePoster from "../component/moviePoster/moviePoster";

const MainLayout = () => {
  return (
    <div className={styles.Layout}>
      <MoviePoster />
      <MoviePoster />
      <MoviePoster />
      <MoviePoster />
    </div>
  );
};
export default MainLayout;
