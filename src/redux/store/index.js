import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import searchResultsReducer from "../reducers/searchResultsReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  searchResults: searchResultsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
