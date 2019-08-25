import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { axiosCall } from '@src/utils';
import getOffices from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

describe('OFFICE ACTIONS', () => {
  let store;
  const token = 'afsgdhfjklhlgkjhdgh';
  beforeEach(() => {
    moxios.install(axios);
    store = mockStore({
      isLoading: false,
      isCompleted: false,
      offices: [],
      error: null
    });
  });

  afterEach(() => {
    moxios.uninstall(axios);
    store.clearActions();
    localStorage.clear();
  });

  describe('getOffices Action', () => {
    const offices = [
      {
        id: '1',
        name: 'Governor',
      }
    ];
    test('should handle getOffices actions', (done) => {
      const expectedActions = [
        'GET_OFFICES_PENDING',
        'GET_OFFICES_FULFILLED'
      ];
      axiosCall.mockResolvedValue({
        data: offices,
      });
      store
        .dispatch(getOffices(token))
        .then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);
          expect(actionTypes).toEqual(expectedActions);
        });
      done();
    });

    test('should return error when getOffices  is unsuccessful', (done) => {
      const expectedActions = [
        'GET_OFFICES_PENDING',
        'GET_OFFICES_REJECTED'
      ];

      axiosCall.mockRejectedValue(
        { response: { message: 'Something went wrong' } }
      );
      store.dispatch(getOffices(token)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
