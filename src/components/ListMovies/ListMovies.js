import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const ListMovies = ({ movieData }) => {
  const location = useLocation();
  return (
    <ul>
      {movieData.map(
        ({ id, title, name }) => (
          // рендеримо фільми за назвою, або заголовком
          <NavLink key={id} to={`/movies/${id}`} state={{ from: location }}>
            <li key={id}>
              {title}
              {name}
            </li>
          </NavLink>
        )
        //   рендеримо, тільки якщо фільм має заголовок
        //   title && <li key={id}>{title} </li>
      )}
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
