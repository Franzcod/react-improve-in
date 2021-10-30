import React from "react";
import { Route, BrowserRouter} from "react-router-dom";

import './App.css'

import Nav from "./components/Nav/Nav"
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";


function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route path="/band/:id" component={Details} />

      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
