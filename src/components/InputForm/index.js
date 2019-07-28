import React from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ labelName, type, id, name, placeholder, ...rest }) => (
  <div>
    <label htmlFor={ name }>{ labelName }</label>
    <input type={ type } id={ id } name={ name } placeholder={ placeholder } {...rest}/>
  </div>
);

InputForm.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  labelName: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
}

InputForm.defaultTypes = {
  id: null,
  type:'text',
  labelName: null,
  name: null,
  placeholder: null,
  required: false
}

export default InputForm;
