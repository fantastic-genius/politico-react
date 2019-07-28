const initialValues = {
    fetching: false,
    fetched: false,
    error: null,
    user: {},
    isAuthenticated: false,
    token: '',
}

const reducer = (state=initialValues, action) => {
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
    case 'SIGNUP_CLEAN_UP':
      return {
        ...initialValues
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated
      }
    default:
      return state;
  }
}

export default reducer;