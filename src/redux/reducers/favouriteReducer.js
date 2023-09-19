import {
  ADD_TO_FAVOURITE,
  CLEAR_ERROR,
  REMOVE_FROM_FAVOURITE,
  SET_ERROR,
  START_LOADING,
  STOP_LOADING,
} from "../actions/action";

const initialState = {
  list: [],
  loading: false, // Nuova proprietà per il caricamento
  error: null,
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      };
    case START_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default favouriteReducer;
