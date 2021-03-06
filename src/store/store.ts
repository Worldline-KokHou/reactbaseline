import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter.slice'
import userReducer from './slices/user.slice'
import { pokemonApi } from '../services/pokemon.slice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
