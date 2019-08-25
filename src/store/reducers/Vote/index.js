import * as types from '@actions/actionTypes';

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

const voteReducer = (state=initialState, {type, payload}) => {
  switch (type) {
    case types.GET_VOTED_CANDIDATES_PENDING:
      return {
        ...state,
        votedCandidatesLoading: true,
      };
    case types.GET_VOTED_CANDIDATES_FULFILLED:
      return {
        ...state,
        votedCandidatesLoading: false,
        votedCandidatesLoaded: true,
        votedCandidates: payload
      };
    case types.GET_VOTED_CANDIDATES_REJECTED:
      return {
        ...state,
        votedCandidatesLoading: false,
        error: payload,
      };
    case types.GET_OFFICE_CANDIDATES_PENDING:
      return {
        ...state,
        candidatesLoading: true
      };
    case types.GET_OFFICE_CANDIDATES_FULFILLED:
      return {
        ...state,
        candidatesLoading: false,
        candidatesLoaded: true,
        candidates: payload
      };
    case types.GET_OFFICE_CANDIDATES_REJECTED:
      return {
        ...state,
        candidatesLoading: false,
        error: payload,
        candidates: [],
      };
    case types.VOTE_CANDIDATE_PENDING:
      return {
        ...state,
        voting: true,
      };
    case types.VOTE_CANDIDATE_FULFILLED:
      return {
        ...state,
        voting: false,
        voted: true,
      };
    case types.VOTE_CANDIDATE_REJECTED:
      return {
        ...state,
        voting: false,
        error: payload
      }
    case types.VOTE_CLEAN_UP:
      return {
        ...initialState
      }
    default:
      return state;
  }
}

export default voteReducer;
