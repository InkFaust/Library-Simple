import React, { Component } from "react";
import { connect } from "react-redux";
import * as authorsActions from "../../store/actions";

import Loader from "../../components/Loader/Loader";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import AuthorsItem from "../../components/Authors/AuthorsItem";

import writerBk from "../../assets/img/writer.jpg";
import "./Authors.css";

const style = {
  backgroundImage: `url(${writerBk})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

class Authors extends Component {
  componentDidMount() {
    this.props.onInitAuthors();
  }

  render() {
    if (this.props.authors) {
      return (
        <div className="container-authors" style={style}>
          <div className="container-center-authors">
            {this.props.authors.map(author => (
              <AuthorsItem
                key={author.id}
                id={author.id}
                name={author.name}
                country={author.country}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors,
    books: state.books,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitAuthors: () => dispatch(authorsActions.initAuthors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withErrorHandler(Authors)
);
