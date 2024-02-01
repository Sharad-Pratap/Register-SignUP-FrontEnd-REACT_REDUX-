import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from "../slice/authSlice"
import { authApi } from '../api/authApi';
import { setupListeners } from '@reduxjs/toolkit/query';


export const store = configureStore({
  reducer: {
    auth : authReducer,
    [authApi.reducerPath] : authApi.reducer,
  }, 
  middleware : (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);


