import { createSlice } from '@reduxjs/toolkit';

const moduleSlice = createSlice({
  name: 'projet',
  initialState: {
    idProjet: null,
  },
  reducers: {
    setIdProjet: (state, action) => {
      state.idProjet = action.payload;
    },
  },
});

export const { setIdProjet } = moduleSlice.actions;
export default moduleSlice.reducer;