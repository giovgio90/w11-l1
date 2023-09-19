import { CLEAR_ERROR, SET_ERROR, START_LOADING, STOP_LOADING, UPDATE_JOBS } from "../actions/action";

const initialState = {
  jobs: [],
  loading: false, // Nuova proprietà per il caricamento
  error: null, // Nuova proprietà per gli errori
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    // Gestiamo le azioni per il caricamento ed errori
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

export default searchResultsReducer;
