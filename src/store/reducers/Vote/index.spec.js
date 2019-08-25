import voteReducer from './index';
import * as types from '../../actions/actionTypes';

const initialState = {
  votedCandidatesLoading: false,
  votedCandidatesLoaded: false,
  candidatesLoading: false,
  candidatesLoaded: false,
  voting: false,
  voted: false,
  votedCandidates: [],
  candidates: [],
  error: null
}

describe('Vote Reducer', () => {
  it('Should return the initial state', () => {
    expect(voteReducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle GET_VOTED_CANDIDATES_PENDING', () => {
    expect(voteReducer(
      initialState, {
        type: types.GET_VOTED_CANDIDATES_PENDING
      }
    )).toEqual({
      ...initialState,
      votedCandidatesLoading: true
    });
  });

  it('Should handle GET_VOTED_CANDIDATES_FULFILLED', () => {
    const votedCandidates = [
      {
        id: '1',
        name: 'Governor',
      }
    ];

    expect(voteReducer(
      initialState, {
        type: types.GET_VOTED_CANDIDATES_FULFILLED,
        payload: votedCandidates
      }
    )).toEqual({
      ...initialState,
      votedCandidatesLoading: false,
      votedCandidatesLoaded: true,
      votedCandidates
    });
  });

  it('Should handle GET_VOTED_CANDIDATES_REJECTED', () => {
    expect(voteReducer(
      initialState, {
        type: types.GET_VOTED_CANDIDATES_REJECTED,
        payload: 'Something went wrong'
      }
    )).toEqual({
      ...initialState,
      error: 'Something went wrong',
      votedCandidatesLoading: false,
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
