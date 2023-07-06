import PropTypes from 'prop-types';
import defaultPhoto from 'components/images/defaultPhoto.jpg';

const Actor = ({ details }) => {
  const { name, profile_path, character } = details;
  const photo = profile_path
    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
    : `${defaultPhoto}`;

  return (
    <div>
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>Character: {character}</p>
    </div>
  );
};

Actor.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default Actor;
