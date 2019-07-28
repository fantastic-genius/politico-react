import Axios from 'axios';

const axiosCall = async ({ path, payload, method, token=null }) => {
  const app = 'https://politico-gen.herokuapp.com';
  const url = `${app}${path}`;
  const contentType = 'application/json';
  const res = await Axios({
    method,
    url,
    data: payload,
    headers:{
      'x-access-token': token,
      'content-type': contentType
    },
    json: true
  });
  const data = res && res.data;
  return data;
};

const saveToLocalStorage = ({token, user }) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}


export { axiosCall, saveToLocalStorage };
