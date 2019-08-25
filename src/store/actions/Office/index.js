import {axiosCall} from '@src/utils';
import * as types from '../actionTypes';

const getOffices =  (token) => async (dispatch) => {
  dispatch({type: types.GET_OFFICES_PENDING});

  try {
    const { data } = await axiosCall({
      path: `/api/v1/offices`, method: 'get', token
    });
    dispatch({type: types.GET_OFFICES_FULFILLED, payload: data})
  } catch (err) {
    const { response } = err;
    const error = response.data || response;
    dispatch({type: types.GET_OFFICES_REJECTED, payload: error})
  }
};

export default getOffices;
