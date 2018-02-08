import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Books from "./containers/Books/Books";
import BookPage from "./containers/BookPage/BookPage";

class App extends Component {
  render() {
    return (
      <div className="books">
        <Books />
        <Switch>
          <Route exact path="/book/:id" component={BookPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
