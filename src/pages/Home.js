import { useState, useEffect } from 'react';
import { fetchTrandingMovie } from 'components/Service/Api';
import ListMovies from 'components/ListMovies/ListMovies';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [trandMovie, setTrandMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const addMovies = async () => {
      try {
        setIsLoading(true);
        const movieData = await fetchTrandingMovie();
        setTrandMovie(movieData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    addMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ListMovies movieData={trandMovie} />
      {isLoading && <Loader />}
    </>
  );
};

export default Home;
