import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { axiosCall } from '@src/utils';
import { signup } from './index';

const user = [
  {
    firstName: 'mark',
    lastName: 'ben',
    email: 'mben@politico.com',
    phoneNumber: '123456789',
    password: 'password'
  }
];

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('../../../utils');

describe('AUTH ACTIONS', () => {
  describe('Signup Action', () => {
    let store;
    beforeEach(() => {
      moxios.install(axios);
      store = mockStore({
        fetching: false,
        fetched: false,
        error: null,
        user: {},
        isAuthenticated: false,
        token: '',
      });
    });

    afterEach(() => {
      moxios.uninstall(axios);
      store.clearActions();
      localStorage.clear();
    });

    test('should get registered user and call signup actions', (done) => {
      const expectedActions = [
        'SIGNUP',
        'SIGNUP_FULFILLED'
      ];
      axiosCall.mockResolvedValue({
        data: user,
      });
      store
        .dispatch(
          signup(user)
        )
        .then(() => {
          const dispatchedActions = store.getActions();
          const actionTypes = dispatchedActions.map(action => action.type);
          expect(actionTypes).toEqual(expectedActions);
        });
      done();
    });

    test('should return error when signup is unsuccessful', (done) => {
      const expectedActions = [
        'SIGNUP',
        'SIGNUP_REJECTED'
      ];

      axiosCall.mockRejectedValue(
        { response: { message: 'Something went wrong' } }
      );
      store.dispatch(signup(user)).then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });
  });
});
