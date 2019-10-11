import {FETCH_REQUEST, FETCH_ERROR, FETCH_FOUND} from '../actions';

const initialState = {
  quotes: [],
  error: '',
  isFetching: false
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ''
      };

    case FETCH_FOUND:
      return {
        ...state,
        error: '',
        isFetching: false,
        quotes: action.payload
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};
