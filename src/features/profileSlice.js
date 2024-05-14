// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   profile: null,
//   loading: false,
//   error: null,
// };

// export const saveProfile = createAsyncThunk(
//   'profile/saveProfile',
//   async (formData, { dispatch }) => {
//     try {
//       const response = await axios.post('/profile', formData);
//       dispatch(setProfile(response.data)); // Mettre à jour les informations du profil dans le store
//     } catch (error) {
//       dispatch(setError(error.message)); // Mettre à jour l'erreur dans le store en cas d'échec
//     }
//   }
// );

// const profileSlice = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {
//     setProfile: (state, action) => {
//       state.profile = action.payload;
//     },
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// export const { setProfile, setLoading, setError } = profileSlice.actions;

// export const selectProfile = (state) => state.profile.profile;
// export const selectLoading = (state) => state.profile.loading;
// export const selectError = (state) => state.profile.error;

// export default profileSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profileId: null
  },
  reducers: {
    setProfile: (state, action) => {
      state.profileId = action.payload;
    }
  }
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;