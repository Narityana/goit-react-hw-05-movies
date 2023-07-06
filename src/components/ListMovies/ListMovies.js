import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const ListMovies = ({ movieData }) => {
  const location = useLocation();
  return (
    <ul>
      {movieData.map(({ id, title, name }) => (
        <NavLink key={id} to={`/movies/${id}`} state={{ from: location }}>
          {title && <li key={id}>{title} </li>}
        </NavLink>
      ))}
    </ul>
  );
};

ListMovies.propTypes = {
  movieData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default ListMovies;
