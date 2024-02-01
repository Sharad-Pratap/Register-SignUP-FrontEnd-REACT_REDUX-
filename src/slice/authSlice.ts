
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  name: string  | null; // Define your user type
  token: string | null;

}

const initialState: AuthState = {
  name: null, 
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action : PayloadAction<{name : string, token : string}>) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    defaultState : (state) => {
      state = initialState;
    }
  },

 });


export const  { setUser, defaultState} = authSlice.actions;
export default authSlice.reducer;
