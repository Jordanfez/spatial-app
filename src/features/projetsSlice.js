import { createSlice } from '@reduxjs/toolkit';

const projetsSlice = createSlice({
  name: 'projets',
  initialState: {
    projetId: null
  },
  reducers: {
    setProjetId: (state, action) => {
      state.projetId = action.payload;
    }
  }
});

export const { setProjetId } = projetsSlice.actions;

export default projetsSlice.reducer;