import React from 'react';
import { toast } from 'react-toastify';

const Toast = ({ message }) => (<h3 className='toast-msg'>{message}</h3>);

const callToast = (type, message) => {
  toast[type](<Toast message={message} />)
};

export { callToast, Toast}
