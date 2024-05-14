import { configureStore } from '@reduxjs/toolkit';
import actualiterReducer from './features/ActualiterSlice';
import AdminSliceReducer from './features/AdminSlice';
import moduleReducer from './features/ModuleSlice';
import UserElementReducer from './features/UserElement';
import userReducer from './features/UserSlice';
import entrepriseReducer from './features/entrepriseSlice';
import profileReducer from './features/profileSlice';
import projetReducer from './features/projetsSlice';

//persit our store
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

//reducers
const reducer = combineReducers({
  user: userReducer,
  entreprise: entrepriseReducer,
  projetId: projetReducer,
  userElement: UserElementReducer,
  idProjet: moduleReducer,
  profile: profileReducer,
  actualiteId: actualiterReducer,
  Admin: AdminSliceReducer
});

const persistConfig = {
  key: "root",
  storage,
};


// persist our store
const persistedReducer = persistReducer(persistConfig, reducer);

// creating the store

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// const store = configureStore({
//     reducer: {
//      user: userReducer,
//      entreprise: entrepriseReducer,
//     },
//   });

export default store;
