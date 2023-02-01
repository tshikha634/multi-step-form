import {
  SUBMIT_POST_REQUEST,
  SUBMIT_POST_SUCCESS,
  SUBMIT_POST_FAILURE,
} from "../actionTypes/actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  resumeDetails: null,
  message: "",
};

const personalDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_POST_REQUEST:
      return {
        isLoading: true,
        error: null,
        resumeDetails: action.payload,
        message: "",
      };
    case SUBMIT_POST_SUCCESS:
      return {
        isLoading: false,
        error: null,
        resumeDetails: null,
        message: "Success",
      };
    case SUBMIT_POST_FAILURE:
      return {
        isLoading: false,
        error: "error",
        resumeDetails: null,
        message: "",
      };
    default:
      return state;
  }
};

export default personalDetailsReducer;
