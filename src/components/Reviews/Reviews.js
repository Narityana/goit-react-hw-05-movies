import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchRewiewsMovie } from 'components/Service/Api';
import { Container, List, Author } from './Rewiews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsMovie, setReviewsMovie] = useState([]);

  useEffect(() => {
    const addCast = async () => {
      try {
        const review = await fetchRewiewsMovie(movieId);
        setReviewsMovie(review);
      } catch (error) {
        console.log(error);
      }
    };
    addCast();
  }, [movieId]);

  return (
    <Container>
      <List>
        {reviewsMovie.length !== 0 ? (
          reviewsMovie.map(review => (
            <li key={review.id}>
              <Author>Author: {review.author}</Author>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We dont have any reviews for this movie</p>
        )}
      </List>
    </Container>
  );
};

export default Reviews;
