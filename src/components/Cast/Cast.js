import { fetchCreditsMovie } from 'components/Service/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, CastList, CastItem } from './Cast.styled';
import Actor from 'components/Actor/Actor';

const Cast = () => {
  const { movieId } = useParams();
  const [creditsMovie, setCreditsMovie] = useState([]);

  useEffect(() => {
    const addCast = async () => {
      try {
        const actors = await fetchCreditsMovie(movieId);
        setCreditsMovie(actors.cast);
      } catch (error) {
        console.log(error);
      }
    };
    addCast();
  }, [movieId]);

  return (
    <Container>
      <CastList>
        {creditsMovie.map(actor => (
          <CastItem key={actor.id}>
            <Actor details={actor} />
          </CastItem>
        ))}
      </CastList>
    </Container>
  );
};

export default Cast;
