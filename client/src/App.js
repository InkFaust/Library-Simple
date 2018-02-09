import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Aux from "./components/Aux/Aux";
import Home from "./containers/Home/Home";
import Books from "./containers/Books/Books";
import BookPage from "./containers/Books/BookPage/BookPage";
import Authors from "./containers/Authors/Authors";

class App extends Component {
  render() {
    return (
      <Aux>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={BookPage} />
          <Route exact path="/authors" component={Authors} />
        </Switch>
      </Aux>
    );
  }
}

export default App;
