import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import isLogged from './isLoggedSlice'
import recommendationSlice from './recommendationSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        logged : isLogged,
        recommendation : recommendationSlice
    }
})