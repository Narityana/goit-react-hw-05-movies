import { useSearchParams } from 'react-router-dom';
import { fetchSerchMovie } from 'components/Service/Api';
import { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import ListMovies from 'components/ListMovies/ListMovies';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    const addMovie = async () => {
      try {
        setIsLoading(true);
        const moviesList = await fetchSerchMovie(query);
        console.log(moviesList);
        setSearchMovies(moviesList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    addMovie();
  }, [query]);

  const handleSubmit = query => {
    setSearchParams({ query: query });
  };

  return (
    <>
      <h2>need form</h2>
      <SearchForm onSubmit={handleSubmit} />
      {searchMovies && searchMovies.length > 0 ? (
        <ListMovies movieData={searchMovies} />
      ) : (
        <p>Фільми не знайдені</p>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Movies;
