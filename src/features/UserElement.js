import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  userName: '',
  email: '',
  password: '',
  userFunction: {
    id: 0,
    name: '',
  },
};

const UserElement = createSlice({
  name: 'userElement',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { id, userName, email, password,profile, userFunction } = action.payload;
      state.id = id;
      state.userName = userName;
      state.email = email;
      state.password = password;
      state.profile = profile;
      state.userFunction = userFunction;
    },
  },
});

export const { loginUser } = UserElement.actions;
export default UserElement.reducer;
