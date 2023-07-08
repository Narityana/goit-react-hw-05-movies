import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, List, Item } from './ListMovies.styled';

const ListMovies = ({ movieData }) => {
  const location = useLocation();
  return (
    <Container>
      <List>
        {movieData
          .filter(movie => movie.title)
          .map(({ id, title }) => (
            <Item key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </Item>
          ))}
      </List>
    </Container>
  );
};

ListMovies.propTypes = {
  movieData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default ListMovies;
