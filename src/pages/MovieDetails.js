import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { fetchDetailsMovie } from 'components/Service/Api';
import Button from 'components/Button/Button';
import CardMovie from 'components/CardMovie/CardMovie';
import Loader from 'components/Loader/Loader';

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
        console.log(movie);
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
    <>
      <NavLink to={backLinkLocationRef.current}>
        <Button buttonName="Go back!" />
      </NavLink>
      <CardMovie details={details} />
      <div>
        <h3>Additional information</h3>
        <NavLink to="cast">
          <Button buttonName="Cast" />
        </NavLink>
        <NavLink to="reviews">
          <Button buttonName="Reviews" />
        </NavLink>
      </div>
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
};

export default MovieDetails;
