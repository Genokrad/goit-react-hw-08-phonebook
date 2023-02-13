import PropTypes from 'prop-types';

const ContactItem = ({ name, number }) => {
  return (
    <div>
      <p className="contactName">{name}:</p>
      <a className="contactNumber" href={'tel:' + number}>
        {number}
      </a>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
