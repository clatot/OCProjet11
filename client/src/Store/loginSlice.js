import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/api/v1";

const initialToken = sessionStorage.getItem("authToken");

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: initialToken ? initialToken : null,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
      console.log("Start");
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.body.token;
      sessionStorage.setItem("authToken", action.payload.body.token);
      console.log("Success");
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log("Fail");
    },
    logout: (state) => {
      state.token = null;
      sessionStorage.removeItem("authToken");
      console.log("logout");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  loginSlice.actions;
export default loginSlice.reducer;

export const loginPost = (loginData) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(`${API_URL}/user/login`, loginData);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.response.data));
  }
};
