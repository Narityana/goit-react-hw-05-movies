import PropTypes from 'prop-types';
// import css from './Button.module.css';
import { ButtonStyle, IconBox } from './Button.styled';

const Button = ({ buttonName, icon }) => {
  return (
    <ButtonStyle type="button">
      <IconBox>{icon}</IconBox>
      {buttonName}
    </ButtonStyle>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
