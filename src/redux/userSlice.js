import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email:null,
  password:null,
  activeLogin: false
}

const userSlice = createSlice({
  name:'user',
  initialState, 
  reducers: {
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
      state.activeLogin = true;
    },
    logoutUser:(state, action) => {
      state.email = '';
      state.password = '';
      state.activeLogin = false;
    }
  }
})

export const { loginUser,logoutUser } = userSlice.actions

export default userSlice.reducer;