import PropTypes from 'prop-types';
import defaultPhoto from 'components/images/defaultPhoto.png';
import { Container, Photo, Subtitle, InfoActor } from './Actor.styled';
const Actor = ({ details }) => {
  const { name, profile_path, character } = details;
  const photo = profile_path
    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
    : `${defaultPhoto}`;

  return (
    <Container>
      <Photo src={photo} alt={name} />
      <Subtitle>{name}</Subtitle>
      <InfoActor>Character: {character}</InfoActor>
    </Container>
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
