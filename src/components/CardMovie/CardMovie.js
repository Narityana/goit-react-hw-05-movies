import PropTypes from 'prop-types';
import defaultPoster from 'components/images/defaultPoster.jpg';
import {
  Container,
  Poster,
  Information,
  Title,
  Score,
  List,
  Subtitle,
} from './CardMovie.styled';

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
    <Container key={id}>
      <Poster src={poster} alt={title} />
      <Information>
        <Title>
          {title} {year}
        </Title>
        <Score>User score: {score}%</Score>
        <List>
          <li>
            <Subtitle>Overview</Subtitle>
            <p>{overview}</p>
          </li>
          <li>
            <Subtitle>Genres</Subtitle>
            <p>{genresList}</p>
          </li>
        </List>
      </Information>
    </Container>
  );
};

CardMovie.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default CardMovie;
