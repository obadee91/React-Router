import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.posterURL} alt={movie.title} />
      </Link>
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;