import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return (
      <div>
        <p>Movie not found!</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div>
        {/* Embed video link */}
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title="Movie Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
