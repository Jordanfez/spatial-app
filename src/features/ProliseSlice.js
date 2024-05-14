import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  description: '',
  user: null,
  competences: null,
  linkedIn: '',
  domain: null,
  cv:'',
  photo:''
};

const profileElement = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfiles: (state, action) => {
      const { id, description, user, competences, linkedIn, domain, cv, photo } = action.payload;
      state.id = id;
      state.description = description;
      state.user = user;
      state.competences = competences;
      state.linkedIn = linkedIn;
      state.domain = domain;
      state.cv = cv;
      state.photo = photo;
    },
  },
});

export const { setProfiles } = profileElement.actions;
export default profileElement.reducer;
