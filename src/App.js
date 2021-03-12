import React, {} from 'react';

// CSS
import './App.css';
import 'bootstrap/scss/bootstrap.scss'

// Router
import { Route, Switch } from "react-router-dom";

// Pages
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.page";
import Header from "./components/header/header.component";

function App() {

  return (
    <>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
        </Switch>
    </>
  );
}

export default App;
