import { combineReducers } from "redux";
import personalDetailsReducer from "./postForm";

export default combineReducers({
  personalDetails: personalDetailsReducer,
});
