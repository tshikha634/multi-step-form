import {
  SUBMIT_POST_REQUEST,
  SUBMIT_POST_SUCCESS,
  SUBMIT_POST_FAILURE,
} from "../actionTypes/actionTypes";
import axios from "axios";

export const requestAction = (data) => ({
  type: SUBMIT_POST_REQUEST,
  payload: data,
});

export const successAction = () => ({
  type: SUBMIT_POST_SUCCESS,
});

export const failureAction = () => ({
  type: SUBMIT_POST_FAILURE,
});

export const submitResume = async (data) => {
  console.log(data);
  return (dispatch) => {
    dispatch({ type: SUBMIT_POST_REQUEST });
    return axios
      .post("http://localhost:3002/post", {
        headers: {
          "Content-Type": "application/json",
        },
        data,
      })
      .then((res) => {
        console.log(JSON.stringify(res));

        dispatch(successAction);
      });
  };
};
