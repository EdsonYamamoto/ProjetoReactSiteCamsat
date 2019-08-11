
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./component/base/header";
import Footer from "./component/base/footer";

import Home from "./component/home";
import About from "./component/about";

import Canvas from "./component/teste/canvasJS";
import Container from '@material-ui/core/Container';

function App() {

  return (
    <Router>
      <div>
        <Header/>

        <Container fixed>
          <h1>Cam sat</h1>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/canvas" component={Canvas} />
        </Container>

        <Footer/>
      </div>
    </Router> 
  );
}

export default App;