import { fetchCreditsMovie } from 'components/Service/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Actor from 'components/Actor/Actor';

const Cast = () => {
  const { movieId } = useParams();
  const [creditsMovie, setCreditsMovie] = useState([]);

  useEffect(() => {
    const addCast = async () => {
      try {
        const actors = await fetchCreditsMovie(movieId);
        console.log(actors);
        setCreditsMovie(actors.cast);
      } catch (error) {
        console.log(error);
      }
    };
    addCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {creditsMovie.map(actor => (
          <li key={actor.id}>
            <Actor details={actor} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
