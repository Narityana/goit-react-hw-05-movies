import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ buttonName }) => {
  return (
    <button type="button" className={css.button}>
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
