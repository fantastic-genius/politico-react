import * as types from '@actions/actionTypes';

const initialState = {
  isLoading: false,
  isCompleted: false,
  offices: [],
  error: null
}

const officeReducer = (state=initialState, {type, payload}) => {
  switch (type) {
    case types.GET_OFFICES_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_OFFICES_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isCompleted: true,
        offices: payload
      };
    case types.GET_OFFICES_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
}

export default officeReducer;
