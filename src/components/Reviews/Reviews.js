import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchRewiewsMovie } from 'components/Service/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsMovie, setReviewsMovie] = useState([]);

  useEffect(() => {
    const addCast = async () => {
      try {
        const review = await fetchRewiewsMovie(movieId);
        console.log(review);
        setReviewsMovie(review);
      } catch (error) {
        console.log(error);
      }
    };
    addCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviewsMovie.length !== 0 ? (
          reviewsMovie.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We dont have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
