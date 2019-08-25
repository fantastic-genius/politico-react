import {axiosCall} from '@src/utils';
import * as types from '@actions/actionTypes';

export const getVotedOffices = (userId, token) => async (dispatch) => {
  dispatch({type: types.GET_VOTED_OFFICES_PENDING});

  try {
    const { data } = await axiosCall({
      path: `/api/v1/votes/${userId}/user`, method: 'get', token
    });
    dispatch({type: types.GET_VOTED_OFFICES_FULFILLED, payload: data});
  } catch (err) {
    const { response } = err;
    const error = response.data || response;
    dispatch({type: types.GET_VOTED_OFFICES_REJECTED, payload: error});
  }
};

export const getOfficeCandidates = (token, officeId) => async (dispatch) => {
  dispatch({type: types.GET_OFFICE_CANDIDATES_PENDING});

  try {
    const { data } = await axiosCall({
      path: `/api/v1/offices/${officeId}/candidates`, method: 'get', token
    });

    dispatch({type: types.GET_OFFICE_CANDIDATES_FULFILLED, payload: data});
  } catch (err) {
    const { response } = err;
    const error = response.data || response;
    dispatch({type: types.GET_OFFICE_CANDIDATES_REJECTED, payload: error});
  }
};

export const voteCandidate = (token, values) => async (dispatch) => {
  dispatch({type: types.VOTE_CANDIDATE_PENDING});

  try {
    const { data } = await axiosCall({
      path: '/api/v1/votes', method: 'post', payload: values, token
    });

    dispatch({type: types.VOTE_CANDIDATE_FULFILLED, payload: data});
  } catch (err) {
    const { response } = err;
    const error = response.data || response;
    dispatch({type: types.VOTE_CANDIDATE_REJECTED, payload: error});
  }
};

export const cleanUp = () => ({type: types.VOTE_CLEAN_UP});

