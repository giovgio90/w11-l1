export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";

export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const addToFavouriteAction = (fav) => ({ type: ADD_TO_FAVOURITE, payload: fav });

export const addToFavouriteAction2 = (data) => ({ type: ADD_TO_FAVOURITE, payload: data.company_name });
export const removeFromFavourite = (fav) => ({ type: REMOVE_FROM_FAVOURITE, payload: fav });

export const searchJobs = (query) => async (dispatch) => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  try {
    const response = await fetch(baseEndpoint + query + "&limit=20");
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
