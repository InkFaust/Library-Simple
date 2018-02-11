import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Aux from "./containers/hoc/Aux/Aux";
import Home from "./containers/Home/Home";
import Books from "./containers/Books/Books";
import Book from "./containers/Books/Book/Book";
import Authors from "./containers/Authors/Authors";
import Author from "./containers/Authors/Author/Author";
import Error from "./components/Loader/Error/Error";

class App extends Component {
  render() {
    return (
      <Aux>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Book} />
          <Route exact path="/authors" component={Authors} />
          <Route exact path="/authors/:id" component={Author} />
          <Route component={Error} />
        </Switch>
      </Aux>
    );
  }
}

export default App;
