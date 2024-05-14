// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     id: 0
// };

// const AdminSlice = createSlice({
//     name: 'Admin',
//     initialState,
//     reducers: {
//         setAdminSlice: (state, action) => {
//             const { id } = action.payload;
//             state.id = id;
//         },
//     },
// });


// export const { setAdminSlice } = adminSlice.actions;

// export default AdminSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const AdminSlice = createSlice({
  name: 'Admin',
  initialState: {
    AdminId: null
  },
  reducers: {
    setAdminSlice: (state, action) => {
      state.AdminId = action.payload;
    }
  }
});

export const { setAdminSlice } = AdminSlice.actions;

export default AdminSlice.reducer;