import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Privado from "./pages/Privado"
import PrivateRoute from './components/privateroutes'

export default function Caminho() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Cadastro} />
    <Route  path="/Login" component={Login} />
    <PrivateRoute  path="/Privado" component={Privado} />
  
    </BrowserRouter>
  );
}