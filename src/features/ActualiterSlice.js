import { createSlice } from '@reduxjs/toolkit';

const ActualiterSlice = createSlice({
  name: 'actualite',
  initialState: {
    actualiteId: null
  },
  reducers: {
    setActualiteId: (state, action) => {
      state.actualiteId = action.payload;
    }
  }
});

export const { setActualiteId } = ActualiterSlice.actions;

export default ActualiterSlice.reducer;