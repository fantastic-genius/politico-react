import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from '@components/NavBar';
import Button from '@components/Button';
import InputForm from '@components/InputForm';
import { signup as signupAction } from '@actions/Auth'
import { callToast } from '@components/Toast'

const Signup = ({
  fetching, error, fetched, history, ...props
}) => {
  const initialValues = {
    firstname: '',
    lastname: '',
    othername: '',
    email: '',
    phoneNumber: '',
    password: '',
    passwordConf: ''
  }

  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const onSignup = (e) => {
    e.preventDefault();
    if (values.password !== values.passwordConf) {
      callToast('error', 'Password must match')
      return;
    }

    props.signupAction(values);
  }

  useEffect(() => {
    if(error){
      callToast('error', error);
    }

    if(fetched){
      callToast('success', 'Registration Successful');
      history && history.push('/vote')
    }

  }, [error, fetched])

  return (
    <div className="container home-con">
      <NavBar />
      <div className="item-box">
        <div className="header">
          <h2>Sign Up</h2>
        </div>
        <form id="signup-form" onSubmit={ onSignup }>
          <InputForm 
            id='firstname'
            type='text'
            labelName='First Name'
            placeholder='First Name'
            name='firstname'
            pattern="^[\w]{3,20}$"
            title="first name is required and must be more than 3 character"
            onChange={ onChange }
            required
            
          />
          <InputForm 
            id='othername'
            type='text'
            labelName='Other Name'
            placeholder='Other Name'
            name='othername'
            onChange={ onChange }
          />
          <InputForm 
            id='lastname'
            type='text'
            labelName='Last Name'
            placeholder='Last Name'
            name='lastname'
            pattern="^[\w]{3,20}$"
            title="first name is required and must be more than 3 character"
            onChange={ onChange }
            required
          />
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
            id='phone'
            type='text'
            labelName='Phone Number'
            placeholder='08012345678'
            name='phoneNumber'
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
          <InputForm 
            id='password-conf'
            type='password'
            labelName='Confirm Password'
            name='passwordConf'
            autoComplete="off"
            onChange={ onChange }
            required
          />
          <div className="btn-con">
            <Button type='submit' id='signup' className='btn btn-success' value='Sign Up' />
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


export default connect(mapStateToProps, {signupAction})(Signup);
