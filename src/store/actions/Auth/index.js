import {axiosCall, saveToLocalStorage} from '@src/utils';

const signup = (values) => async (dispatch) => {
  dispatch({type: 'SIGNUP'});

  try{
    const { data } = await axiosCall({path: '/api/v1/auth/signup', payload: values, method: 'post'});
    saveToLocalStorage(data[0]);
    dispatch({type: 'SIGNUP_FULFILLED', payload: data[0]})
  } catch (err) {
    const { response } = err;
    const error = response.data || response;
    dispatch({type: 'SIGNUP_REJECTED', payload: error})
  }
};

const setUser = () => dispatch => {
  const user = JSON.parse(localStorage.getItem('user'));
  if(user){
    dispatch({type: 'SET_USER', payload: {user, isAuthenticated: true}});
  }else{
    dispatch({type: 'SET_USER', payload: {user: {}, isAuthenticated: false }});
  }
}

export { signup, setUser };
