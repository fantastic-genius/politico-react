import authReducer from './index';

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

describe('Auth Reducer', () => {
  it('Should return the initial state', () => {
    expect(authReducer (undefined, {})).toEqual(initialState);
  });

  it('Should handle SIGNUP', () => {
    expect(authReducer (
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
    expect(authReducer (
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
    expect(authReducer (
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
    expect(authReducer (
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
      token: 'gfhfgdhjkgytuio'
    }
    expect(authReducer (
      initialState, {
        type: 'SET_USER',
        payload
      }
    )).toEqual({
      ...initialState,
      ...payload
    });
  });

  it('Should handle SIGNIN', () => {
    expect(authReducer (
      initialState, {
        type: 'SIGNIN'
      }
    )).toEqual({
      ...initialState,
      fetching: true
    });
  });

  it('Should handle SIGNIN_FULFILLED', () => {
    const payload = {
      user,
      token: 'hcjvncljnvjfhhkjdcjdcbb'
    }
    expect(authReducer (
      initialState, {
        type: 'SIGNIN_FULFILLED',
        payload
      }
    )).toEqual({
      ...initialState,
      fetched: true,
      isAuthenticated: true,
      ...payload
    });
  });

  it('Should handle SIGNIN_REJECTED', () => {
    const payload = {
      error: 'Something went wrong'
    }
    expect(authReducer (
      initialState, {
        type: 'SIGNIN_REJECTED',
        payload
      }
    )).toEqual({
      ...initialState,
      error: 'Something went wrong',
      fetching: false,
    });
  });

  it('Should handle SIGNIN_CLEAN_UP', () => {
    expect(authReducer (
      initialState, {
        type: 'SIGNIN_CLEAN_UP'
      }
    )).toEqual({
      ...initialState
    });
  });
});
