import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login_info: {
    username: "",
    isloggedin: false,
    burnerid: 0,
    room:"",
    usertheme: "dark"
  },
  route_info: {
    company: "",
    usertype: "",
    lastseen: null,
  },
}

const AppState = createSlice({
  name: "appStore",
  initialState,
  reducers: {
    setlogininfo: (state, action) => {
      state.login_info = action.payload;
    },
    setrouteinfo: (state, action) => {
      state.route_info = action.payload;
    },
  },
});
export const { setlogininfo } = AppState.actions;
export const { setrouteinfo } = AppState.actions;
export default AppState.reducer;
