import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: '1',
      title: 'Inception',
      description: 'A mind-bending action thriller.',
      posterURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
      rating: 8.8,
      trailerLink: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    },
    {
      id: '2',
      title: 'The Shawshank Redemption',
      description: 'A story of hope and friendship.',
      posterURL: 'https://c8.alamy.com/comp/BKH04B/the-shawshank-redemption-1994-poster-shwk-003vs-BKH04B.jpg',
      rating: 9.3,
      trailerLink: 'https://www.youtube.com/watch?v=NmzuHjWmXOc',
    },
    // Add more movies here...
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (filterType, value) => {
    let filtered = movies;

    if (filterType === 'title') {
      filtered = movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(value.toLowerCase())
      );
    }

    if (filterType === 'rating') {
      filtered = movies.filter((movie) => movie.rating >= parseFloat(value));
    }

    setFilteredMovies(filtered);
  };

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <Router>
      <div className="app">
        <h1>My Movie App</h1>
        <Routes>
          <Route exact path="/">
            <Filter handleFilter={handleFilter} />
            <MovieList movies={filteredMovies} />
          </Route>
          <Route path="/movies/:id">
            <MovieDetail movies={movies} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
