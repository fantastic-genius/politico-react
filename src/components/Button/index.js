import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, type, className, value }) => (
    <button type={ type } id={ id } className={ className }>{ value }</button>
);

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,

}

Button.defaultTypes = {
  id: null,
  type: null,
  className: null,
  value: null
}

export default Button;
