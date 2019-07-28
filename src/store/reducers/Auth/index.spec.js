import signupReducer from './index';

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  user: {},
  isAuthenticated: false,
  token: '',
}

const user = {
  firstName: 'mark',
  lastName: 'ben',
  email: 'mben@politico.com',
  phoneNumber: '123456789',
  password: 'password'
};

describe('Signup Reducer', () => {
  it('Should return the initial state', () => {
    expect(signupReducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle SIGNUP', () => {
    expect(signupReducer(
      initialState, {
        type: 'SIGNUP'
      }
    )).toEqual({
      ...initialState,
      fetching: true
    });
  });

  it('Should handle SIGNUP_FULFILLED', () => {
    const payload = {
      user,
      token: 'hcjvncljnvjfhhkjdcjdcbb'
    }
    expect(signupReducer(
      initialState, {
        type: 'SIGNUP_FULFILLED',
        payload
      }
    )).toEqual({
      ...initialState,
      fetched: true,
      isAuthenticated: true,
      ...payload
    });
  });

  it('Should handle SIGNUP_REJECTED', () => {
    const payload = {
      error: 'Something went wrong'
    }
    expect(signupReducer(
      initialState, {
        type: 'SIGNUP_REJECTED',
        payload
      }
    )).toEqual({
      ...initialState,
      error: 'Something went wrong',
      fetching: false,
    });
  });

  it('Should handle SIGNUP_CLEAN_UP', () => {
    expect(signupReducer(
      initialState, {
        type: 'SIGNUP_CLEAN_UP'
      }
    )).toEqual({
      ...initialState
    });
  });

  it('Should handle SET_USER', () => {
    const payload = {
      user,
      isAuthenticated: true,
    }
    expect(signupReducer(
      initialState, {
        type: 'SET_USER',
        payload
      }
    )).toEqual({
      ...initialState,
      ...payload
    });
  });
});
