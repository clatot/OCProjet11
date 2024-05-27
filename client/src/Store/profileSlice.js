import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/api/v1";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
    id: "",
    loading: false,
    error: null,
  },
  reducers: {
    profileStart: (state) => {
      state.loading = true;
      state.error = null;
      console.log("profileStart");
    },
    profileSuccess: (state, action) => {
      state.loading = false;
      state.email = action.payload.body.email;
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
      state.userName = action.payload.body.userName;
      console.log("profileSuccess");
    },
    profileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log("profileFail");
    },
    profileClear: (state) => {
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.userName = "";
      console.log("profileClear");
    },
    profileUpdate: (state, action) => {
      state.loading = false;
      state.userName = action.payload.body.userName;
      console.log("profileUpdated");
    },
  },
});

export const {
  profileStart,
  profileSuccess,
  profileFailure,
  profileClear,
  profileUpdate,
} = profileSlice.actions;
export default profileSlice.reducer;

export const profilePost = (token) => async (dispatch) => {
  dispatch(profileStart());
  try {
    const response = await axios.post(
      `${API_URL}/user/profile`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("profilePut response", response.data);
    dispatch(profileSuccess(response.data));
  } catch (error) {
    console.log("profilePut error", error.response.data);
    dispatch(profileFailure(error.response.data));
  }
};

export const profilePut = (profileData, token) => async (dispatch) => {
  dispatch(profileStart());
  try {
    const response = await axios.put(`${API_URL}/user/profile`, profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("profilePut response", response.data);
    dispatch(profileSuccess(response.data));
  } catch (error) {
    console.log("profilePut error", error.response.data);
    dispatch(profileFailure(error.response.data));
  }
};
