import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import store from "./store.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ApiProvider} from "@reduxjs/toolkit/dist/query/react";
import PokemonPage from "./pages/pokemon/PokemonPage.jsx";
import SinglePokemonPage from "./pages/spokemon/SinglePokemonPage.jsx";
import CartPage from "./pages/cart/CartPage.jsx";
import Nav from "./components/Nav.jsx";
import {pokemonApi} from "./reducers/pokemon.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <ApiProvider api={pokemonApi}>
                <BrowserRouter>
                    <Nav/>
                    <Routes>
                        <Route index element={<PokemonPage/>}/>
                        <Route path={"/cart"} element={<CartPage/>}/>
                        <Route path={"/pokemon/:id"} element={<SinglePokemonPage/>}/>
                    </Routes>
                </BrowserRouter>
            </ApiProvider>
        </Provider>

    </React.StrictMode>,
)
