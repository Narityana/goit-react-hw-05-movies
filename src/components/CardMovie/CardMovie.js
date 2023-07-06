import PropTypes from 'prop-types';
import defaultPoster from 'components/images/defaultPoster.jpg';
import css from './CardMovie.module.css';

const CardMovie = ({ details }) => {
  const {
    id,
    title,
    release_date,
    poster_path,
    vote_average,
    overview,
    genres,
  } = details;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `${defaultPoster}`;
  const year = release_date && `(${release_date.slice(0, 4)})`;
  const score = Math.round(vote_average * 10);
  const genresList = genres
    ? genres.map(genre => genre.name).join(' ')
    : 'No information';

  return (
    <div className={css.movie__container} key={id}>
      <h1 className={css.movie__title}>
        {title} {year}
      </h1>
      <img className={css.movie__image} src={poster} alt={title} />
      <p>User score: {score}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genresList}</p>
    </div>
  );
};

CardMovie.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default CardMovie;
