import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from '@components/NavBar';
import Button from '@components/Button';
import InputForm from '@components/InputForm';
import { signin as signinAction } from '@actions/Auth'
import { callToast } from '@components/Toast'

const Signin = ({
  fetching, error, fetched, history, ...props
}) => {
  const initialValues = {
    email: '',
    password: '',
  }

  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const onSignin = (e) => {
    e.preventDefault();
    props.signinAction(values);
  }

  useEffect(() => {
    if(error){
      callToast('error', error);
    }

    if(fetched){
      callToast('success', 'Login Successful');
      history && history.push('/')
    }

  }, [error, fetched])

  return (
    <div className="container home-con">
      <NavBar />
      <div className="item-box">
        <div className="header">
          <h2>Sign In</h2>
        </div>
        <form id="signup-form" onSubmit={ onSignin }>
          <InputForm 
            id='email'
            type='email'
            labelName='Email'
            placeholder='Email'
            name='email'
            pattern="^[\w.]+@[\w]{2,20}.[a-z]{2,10}$"
            title="must be a valid email"
            onChange={ onChange }
            required
          />
          <InputForm 
            id='password'
            type='password'
            labelName='Password'
            name='password'
            pattern="^[\w]{8,20}$"
            title="password is required and must be more than 8 character"
            autoComplete="off"
            onChange={ onChange }
            required
          />
          <div className="btn-con">
            <Button type='submit' id='login' className='btn btn-success' value='Login' />
          </div>
        </form>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  fetching: state.auth.fetching,
  error: state.auth.error,
  fetched: state.auth.fetched,
  user: state.auth.user
});


export default connect(mapStateToProps, {signinAction})(Signin);
