import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Button, Form } from './SearchForm.styled';

const SearchForm = ({ onSubmit, query }) => {
  const [searchQuery, setSerchQuery] = useState('');

  const onInput = event => {
    setSerchQuery(event.currentTarget.value.toLowerCase().trim());
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (!searchQuery) {
      toast.warning('Empty search field entered!');
      return;
    }

    onSubmit(searchQuery);
    setSerchQuery('');
    event.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        value={query}
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onInput={onInput}
      />
      <Button type="submit">Search</Button>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
