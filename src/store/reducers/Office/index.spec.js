import * as types from '@actions/actionTypes';
import officeReducer from './index';

const initialState = {
  isLoading: false,
  isCompleted: false,
  offices: [],
  error: null
}

const offices = [
  {
    id: '1',
    name: 'Governor',
  }
];

describe('Office Reducer', () => {
  it('Should return the initial state', () => {
    expect(officeReducer(undefined, {})).toEqual(initialState);
  });

  it('Should handle GET_OFFICES_PENDING', () => {
    expect(officeReducer(
      initialState, {
        type: types.GET_OFFICES_PENDING
      }
    )).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('Should handle GET_OFFICES_FULFILLED', () => {
    expect(officeReducer(
      initialState, {
        type: types.GET_OFFICES_FULFILLED,
        payload: offices
      }
    )).toEqual({
      ...initialState,
      isLoading: false,
      isCompleted: true,
      offices
    });
  });

  it('Should handle GET_OFFICES_REJECTED', () => {
    expect(officeReducer(
      initialState, {
        type: types.GET_OFFICES_REJECTED,
        payload: 'Something went wrong'
      }
    )).toEqual({
      ...initialState,
      error: 'Something went wrong',
      isLoading: false,
    });
  });
});
