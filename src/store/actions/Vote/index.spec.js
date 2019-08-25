import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { axiosCall } from '@src/utils';
import {
  getVotedCandidates, getOfficeCandidates, voteCandidate, cleanUp
} from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

describe('VOTE ACTIONS', () => {
  let store;
  const token = 'afsgdhfjklhlgkjhdgh';
  beforeEach(() => {
    moxios.install(axios);
    store = mockStore({
      votedCandidatesLoading: false,
      votedCandidatesLoaded: false,
      candidatesLoading: false,
      candidatesLoaded: false,
      voting: false,
      voted: false,
      votedCandidates: [],
      candidates: [],
      error: null
    });
  });

  afterEach(() => {
    moxios.uninstall(axios);
    store.clearActions();
    localStorage.clear();
  });

  describe('getVotedCandidates Action', () => {
    const votedCandidates = [
      {
        officeid: '1',
        name: 'Governor',
        firstname: 'Mark',
        lastname: 'Ben'

      }
    ];
    test('should handle getVotedCandidates actions', (done) => {
      const expectedActions = [
        'GET_VOTED_CANDIDATES_PENDING',
        'GET_VOTED_CANDIDATES_FULFILLED'
      ];
      axiosCall.mockResolvedValue({
        data: votedCandidates,
      });
      store
        .dispatch(getVotedCandidates(1, token))
        .then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);
          expect(actionTypes).toEqual(expectedActions);
        });
      done();
    });

    test('should return error when getVotedCandidates is unsuccessful', (done) => {
      const expectedActions = [
        'GET_VOTED_CANDIDATES_PENDING',
        'GET_VOTED_CANDIDATES_REJECTED'
      ];

      axiosCall.mockRejectedValue(
        { response: { message: 'Something went wrong' } }
      );
      store.dispatch(getVotedCandidates(1, token)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });

  describe('getOfficeCandidates Action', () => {
    const candidates = [
      {
        id: '1',
        firstname: 'Mala',
        lastname: 'Bala',
        party: 'All peoples party',
        partyLogo: 'https://app.com/logoUrl'
    
      }
    ];

    test('should handle get office candidates actions', (done) => {
      const expectedActions = [
        'GET_OFFICE_CANDIDATES_PENDING',
        'GET_OFFICE_CANDIDATES_FULFILLED'
      ];
      axiosCall.mockResolvedValue({
        data: candidates
      });
      store
        .dispatch(
          getOfficeCandidates(token, 1)
        )
        .then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);
          expect(actionTypes).toEqual(expectedActions);
        });
      done();
    });

    test('should return error when getOfficeCandidates is unsuccessful', (done) => {
      const expectedActions = [
        'GET_OFFICE_CANDIDATES_PENDING',
        'GET_OFFICE_CANDIDATES_REJECTED'
      ];

      axiosCall.mockRejectedValue(
        { response: { message: 'Something went wrong' } }
      );
      store.dispatch(getOfficeCandidates(token, 1)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });

  describe('voteCandidate Action', () => {
    const values = {
      office: 1,
      candidate: 1,
    }

    const data = {
      message: 'candidate successfully voted'
    }

    test('should handle vote candidate actions', (done) => {
      const expectedActions = [
        'VOTE_CANDIDATE_PENDING',
        'VOTE_CANDIDATE_FULFILLED'
      ];
      axiosCall.mockResolvedValue({
        data
      });
      store
        .dispatch(
          voteCandidate(token, values)
        )
        .then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);
          expect(actionTypes).toEqual(expectedActions);
        });
      done();
    });

    test('should return error when voteCandidate is unsuccessful', (done) => {
      const expectedActions = [
        'VOTE_CANDIDATE_PENDING',
        'VOTE_CANDIDATE_REJECTED'
      ];

      axiosCall.mockRejectedValue(
        { response: { message: 'Something went wrong' } }
      );
      store.dispatch(voteCandidate(token, values)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });

  describe('cleanUp actions', () => {
    test('handle cleanUp actions', () => {
      const cleanUpAction = cleanUp();
      expect(cleanUpAction).toEqual({ type: 'VOTE_CLEAN_UP' });
    });
  });
  
});
