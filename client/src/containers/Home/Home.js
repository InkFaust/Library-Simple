import React, { Component } from "react";

import "./Home.css";
import libraryBk from "../../assets/img/library.jpg";

import Navigation from "../../components/Navigation/Navigation";
import LinkEl from "../../components/Navigation/LinkEl/LinkEl";

const style = {
  backgroundImage: `url(${libraryBk})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

export default class Home extends Component {
  render() {
    return (
      <div className="container container-home" style={style}>
        <Navigation className="list-home">
          <LinkEl to="/books/" className="link-home">
            Books
          </LinkEl>
          <LinkEl to="/authors/" className="link-home">
            Authors
          </LinkEl>
        </Navigation>
      </div>
    );
  }
}
