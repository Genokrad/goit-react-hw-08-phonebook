import PropTypes from 'prop-types';

const Button = ({ title, type = 'button', onClick }) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
