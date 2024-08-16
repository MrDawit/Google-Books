import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <>
    <Router>
      <Nav/>
        <Routes>
          <Route exact path='/' component={<Home/>} />
          <Route exact path='/saved' component={<Saved/>} />
          <Route component={<NoMatch/>} />
        </Routes>
      
    </Router>
    </>
  );
}

export default App;

