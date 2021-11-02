import { postsAPI } from '../services/PostService';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './reducers/userSlice' 

const rootReducer = combineReducers({
    userReducer,
    [postsAPI.reducerPath]: postsAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: ( getDefaultMiddleware ) => 
            getDefaultMiddleware().concat(postsAPI.middleware)
    })
}
 
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
