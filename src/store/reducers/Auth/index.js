const initialValues = {
    fetching: false,
    fetched: false,
    error: null,
    user: {},
    isAuthenticated: false,
    token: '',
}

const authReducer = (state=initialValues, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        fetching: true
      };
    case 'SIGNUP_REJECTED':
        return {
          ...state,
          fetching: false,
          error: action.payload.error
        };
    case 'SIGNUP_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token
      };
    case 'AUTH_CLEAN_UP':
      return {
        ...initialValues
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
        token: action.payload.token
      };
    case 'SIGNIN':
      return {
        ...state,
        fetching: true
      };
    case 'SIGNIN_REJECTED':
        return {
          ...state,
          fetching: false,
          error: action.payload.error
        };
    case 'SIGNIN_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token
      };
    default:
      return state;
  }
}

export default authReducer;