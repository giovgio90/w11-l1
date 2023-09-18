export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const addToFavouriteAction = (fav) => ({ type: ADD_TO_FAVOURITE, payload: fav });
export const addToFavouriteAction2 = (data) => ({ type: ADD_TO_FAVOURITE, payload: data.company_name });
export const removeFromFavourite = (fav) => ({ type: REMOVE_FROM_FAVOURITE, payload: fav });

export const searchJobs = (query) => async (dispatch) => {
  try {
    const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
    if (response.ok) {
      const { data } = await response.json();

      dispatch({ type: "UPDATE_JOBS", payload: data });
    } else {
      alert("Error fetching results");
    }
  } catch (error) {
    console.log(error);
  }
};

export const searchCompanyJobs = (companyName) => async (dispatch) => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  try {
    const response = await fetch(baseEndpoint + companyName);
    if (response.ok) {
      const { data } = await response.json();
      dispatch({ type: "UPDATE_COMPANY_JOBS", payload: data });
    } else {
      alert("Error fetching results");
    }
  } catch (error) {
    console.log(error);
  }
};
