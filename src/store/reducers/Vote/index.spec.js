import voteReducer from './index';
import * as types from '../../actions/actionTypes';

const initialState = {
  officesLoading: false,
  officesLoaded: false,
  candidatesLoading: false,
  candidatesLoaded: false,
  voting: false,
  voted: false,
  offices: [],
  candidates: [],
  error: null
}

describe('Vote Reducer', () => {
  it('Should return the initial state', () => {
    expect(voteReducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle GET_VOTED_OFFICES_PENDING', () => {
    expect(voteReducer(
      initialState, {
        type: types.GET_VOTED_OFFICES_PENDING
      }
    )).toEqual({
      ...initialState,
      officesLoading: true
    });
  });

  it('Should handle GET_VOTED_OFFICES_FULFILLED', () => {
    const offices = [
      {
        id: '1',
        name: 'Governor',
      }
    ];

    expect(voteReducer(
      initialState, {
        type: types.GET_VOTED_OFFICES_FULFILLED,
        payload: offices
      }
    )).toEqual({
      ...initialState,
      officesLoading: false,
      officesLoaded: true,
      offices
    });
  });

  it('Should handle GET_VOTED_OFFICES_REJECTED', () => {
    expect(voteReducer(
      initialState, {
        type: types.GET_VOTED_OFFICES_REJECTED,
        payload: 'Something went wrong'
      }
    )).toEqual({
      ...initialState,
      error: 'Something went wrong',
      officesLoading: false,
    });
  });

  it('Should handle GET_OFFICE_CANDIDATES_PENDING', () => {
    expect(voteReducer(
      initialState, {
        type: types.GET_OFFICE_CANDIDATES_PENDING
      }
    )).toEqual({
      ...initialState,
      candidatesLoading: true
    });
  });

  it('Should handle GET_OFFICE_CANDIDATES_FULFILLED', () => {
    const candidates = [{
      id: 1,
      firstname: 'john',
      lastname: 'mark',
      passportUrl: 'https://w.pe./img',
      partyname: 'All peoples party',
      logourl: 'https://app.com/logo'
    }]

    expect(voteReducer(
      initialState, {
        type: types.GET_OFFICE_CANDIDATES_FULFILLED,
        payload: candidates
      }
    )).toEqual({
      ...initialState,
      candidatesLoading: false,
      candidatesLoaded: true,
      candidates
    });
  });

  it('Should handle GET_OFFICE_CANDIDATES_REJECTED', () => {
    expect(voteReducer(
      initialState, {
        type: types.GET_OFFICE_CANDIDATES_REJECTED,
        payload: 'Something went wrong'
      }
    )).toEqual({
      ...initialState,
      error: 'Something went wrong',
      candidatesLoading: false,
    });
  });

  it('Should handle VOTE_CANDIDATE_PENDING', () => {
    expect(voteReducer(
      initialState, {
        type: types.VOTE_CANDIDATE_PENDING
      }
    )).toEqual({
      ...initialState,
      voting: true
    });
  });

  it('Should handle VOTE_CANDIDATE_FULFILLED', () => {
    expect(voteReducer(
      initialState, {
        type: types.VOTE_CANDIDATE_FULFILLED
      }
    )).toEqual({
      ...initialState,
      voting: false,
      voted: true
    });
  });

  it('Should handle VOTE_CANDIDATE_REJECTED', () => {
    expect(voteReducer(
      initialState, {
        type: types.VOTE_CANDIDATE_REJECTED,
        payload: 'Something went wrong'
      }
    )).toEqual({
      ...initialState,
      error: 'Something went wrong',
      voting: false,
    });
  });

  it('Should handle VOTE_CLEAN_UP', () => {
    expect(voteReducer(
      initialState, {
        type: types.VOTE_CLEAN_UP,
        payload: 'Something went wrong'
      }
    )).toEqual({
      ...initialState
    });
  });
});
