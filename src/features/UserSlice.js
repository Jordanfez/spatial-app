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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, userName, email, password,age,localisation,profile, userFunction } = action.payload;
      state.id = id;
      state.userName = userName;
      state.email = email;
      state.password = password;
      state.age = age;
      state.localisation = localisation;
      state.profile = profile;
      state.userFunction = userFunction;
    },
  },
});


export const { setUser } = userSlice.actions;

export default userSlice.reducer;