export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const UPDATE_JOBS = "UPDATE_JOBS";
export const UPDATE_COMPANY_JOBS = "UPDATE_COMPANY_JOBS";

export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";
export const SET_ERROR = "SET_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const addToFavouriteAction = (fav) => ({ type: ADD_TO_FAVOURITE, payload: fav });
export const addToFavouriteAction2 = (data) => ({ type: ADD_TO_FAVOURITE, payload: data.company_name });
export const removeFromFavourite = (fav) => ({ type: REMOVE_FROM_FAVOURITE, payload: fav });

export const searchJobs = (query) => async (dispatch) => {
  try {
    dispatch(startLoading()); // Inizia il caricamento
    const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
    if (response.ok) {
      const { data } = await response.json();

      dispatch({ type: UPDATE_JOBS, payload: data });
      dispatch(stopLoading()); // Termina il caricamento
    } else {
      dispatch(setError("Error fetching results"));
    }
  } catch (error) {
    console.log(error);
    dispatch(setError("An error occurred"));
  }
};

export const searchCompanyJobs = (companyName) => async (dispatch) => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  try {
    const response = await fetch(baseEndpoint + companyName);
    if (response.ok) {
      const { data } = await response.json();
      dispatch({ type: UPDATE_COMPANY_JOBS, payload: data });
    } else {
      alert("Error fetching results");
    }
  } catch (error) {
    console.log(error);
  }
};

// Azione per iniziare il caricamento
export const startLoading = () => ({ type: START_LOADING });

// Azione per interrompere il caricamento
export const stopLoading = () => ({ type: STOP_LOADING });

// Azione per impostare un errore
export const setError = (error) => ({ type: SET_ERROR, payload: error });

// Azione per cancellare un errore
export const clearError = () => ({ type: CLEAR_ERROR });
