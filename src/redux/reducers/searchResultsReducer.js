const initialState = {
  jobs: [],
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};

export default searchResultsReducer;
