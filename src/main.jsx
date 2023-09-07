import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import store from "./store.js";
import {HashRouter, BrowserRouter, Routes, Route} from "react-router-dom";
import PokemonPage from "./pages/pokemon/PokemonPage.jsx";
import SinglePokemonPage from "./pages/spokemon/SinglePokemonPage.jsx";
import CartPage from "./pages/cart/CartPage.jsx";
import Nav from "./components/Nav.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <Nav/>
        <Routes>
          <Route index element={<PokemonPage/>}/>
          <Route path={"/cart"} element={<CartPage/>}/>
          <Route path={"/pokemon/:id"} element={<SinglePokemonPage/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
