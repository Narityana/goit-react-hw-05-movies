import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.currentTarget.elements.query.value;

    if (!query) {
      toast.warning('please, try again');
      return;
    }
    onSubmit(query);
    event.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
