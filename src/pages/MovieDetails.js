import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { fetchDetailsMovie } from 'components/Service/Api';
import Button from 'components/Button/Button';
import CardMovie from 'components/CardMovie/CardMovie';
import Loader from 'components/Loader/Loader';

import {
  IconBack,
  IconReview,
  IconCast,
  Container,
  Subtitle,
  BtnContainer,
  LinkButton,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const addDetails = async () => {
      try {
        setIsLoading(true);
        const movie = await fetchDetailsMovie(movieId);
        setDetails(movie);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    addDetails();
  }, [movieId]);

  return (
    <Container>
      <NavLink to={backLinkLocationRef.current}>
        <Button icon={<IconBack />} buttonName="Go back!" />
      </NavLink>
      <CardMovie details={details} />
      <BtnContainer>
        <Subtitle>Additional information:</Subtitle>

        <LinkButton to="cast">
          <Button icon={<IconCast />} buttonName="Cast" />
        </LinkButton>
        <NavLink to="reviews">
          <Button icon={<IconReview />} buttonName="Reviews" />
        </NavLink>
      </BtnContainer>
      {isLoading && <Loader />}
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
