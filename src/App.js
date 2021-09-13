import { useEffect, useState } from "react";
import http from "./utils/http";
import Movies from "./components/Movies/Movies";
import Navbar from "./components/Navbar/Navbar";

import Modal from "./components/Modal/Modal";

const App = () => {
  const [movie, setMovie] = useState({});
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    const { data } = await http.get(
      `/movie/popular?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`
    );
    setMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const openModal = (movie) => {
    setMovie(movie);
    setVisible(true);
  };

  const closeModal = () => {
    setMovie({});
    setVisible(false);
  };

  const onChange = async (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length < 1){
      fetchMovies();
      return;
    }
    const { data } = await http.get(
      `/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
    );
    setMovies(data.results);
  };

  return (
    <div className="container">
      <Modal visible={visible} movie={movie} closeModal={closeModal} />
      <Navbar value={input} onChange={onChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="movies--label">Most Recent Movies</h1>
          <Movies movies={movies} openModal={openModal} />
        </div>
      )}
    </div>
  );
};

export default App;
