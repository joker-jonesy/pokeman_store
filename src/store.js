import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import cartReducer from './reducers/cart.js';
import {pokemonApi} from "./reducers/pokemon.js";

const store = configureStore({
    reducer:{
        cart: cartReducer,
        pokemonApi: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})

setupListeners(store.dispatch)

export default store;