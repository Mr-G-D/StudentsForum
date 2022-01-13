import * as api from "api/main";
import { AUTH } from "constants/actionTypes";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    const response = dispatch({ type: AUTH, data });
    return response;
    // history.push("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const signUp =
  (formData, college, course, start, end, dob, history) => async (dispatch) => {
    try {
      const userData = {
        formData,
        college: college,
        course: course,
        start: start,
        end: end,
        dob: dob,
      };
      const { data } = await api.signUp(userData);

      const response = dispatch({ type: AUTH, data });
      return response;
      // history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
