import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slices/themeSlice';
import cartSlice from './slices/cartSlice';
import modelSlice from './slices/modelSlice';

export const store = configureStore({
    reducer: {
        theme: themeSlice,
        cart: cartSlice,
        model: modelSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
