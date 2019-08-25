import {axiosCall, saveToLocalStorage} from '@src/utils';

const signup = (values) => async (dispatch) => {
  dispatch({type: 'SIGNUP'});

  try{
    const { data } = await axiosCall({path: '/api/v1/auth/signup', payload: values, method: 'post'});
    saveToLocalStorage(data[0]);
    dispatch({type: 'SIGNUP_FULFILLED', payload: data[0]})
  } catch (err) {
    const { response } = err;
    const error = response.data.error || response.data || response;
    dispatch({type: 'SIGNUP_REJECTED', payload: error})
  }
};

const setUser = () => dispatch => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  if(user){
    dispatch({type: 'SET_USER', payload: {user, token, isAuthenticated: true}});
  }else{
    dispatch({type: 'SET_USER', payload: {user: {}, isAuthenticated: false }});
  }
}

const signin = (values) => async (dispatch) => {
  dispatch({type: 'SIGNIN'});

  try{
    const { data } = await axiosCall({path: '/api/v1/auth/login', payload: values, method: 'post'});
    saveToLocalStorage(data[0]);
    dispatch({type: 'SIGNIN_FULFILLED', payload: data[0]})
  } catch (err) {
    const { response } = err;
    const error = response.data.error || response.data || response;
    dispatch({type: 'SIGNIN_REJECTED', payload: error})
  }
};

const signout = () => dispatch => {
  dispatch({type: 'SIGNOUT'});
  localStorage.clear()
  dispatch({type: 'SIGNOUT_SUCCESSFUL'});
  dispatch(setUser())

}

export { signup, setUser, signin, signout };
