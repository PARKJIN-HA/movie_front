import React from "react";
import styles from "./moviePoster.module.css";
import image from "../../image/examplePoster.jpeg";

const MoviePoster = () => {
  return (
    <div className={styles.RootDiv}>
      <div className={styles.PosterDiv}>
        <img src={image} className={styles.MoviePoster} alt="영화포스터"></img>
      </div>
      <div className={styles.ButtonDiv}>
        <button className={styles.Button}>예매</button>
      </div>
    </div>
  );
};

export default MoviePoster;
