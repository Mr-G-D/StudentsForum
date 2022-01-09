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

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    history.push("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
