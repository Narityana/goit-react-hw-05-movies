import { useSearchParams } from 'react-router-dom';
import { fetchSerchMovie } from 'components/Service/Api';
import { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import ListMovies from 'components/ListMovies/ListMovies';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const styles = {
    marginTop: '40px',
    fontSize: '24px',
    fontWeight: 500,
    textAlign: 'center',
  };
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

  let content = null;

  if (isLoading) {
    content = <Loader />;
  } else if (searchMovies.length === 0 && query !== '') {
    content = (
      <p style={styles}>
        Nothing found! For accurate search, please enter the original title
      </p>
    );
  } else if (searchMovies.length > 0) {
    content = <ListMovies movieData={searchMovies} />;
  }

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {content}
    </>
  );
};

export default Movies;
