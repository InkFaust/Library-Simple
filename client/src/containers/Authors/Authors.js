import React, { Component } from "react";
import { connect } from "react-redux";
import * as authorsActions from "../../store/actions";

import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import AuthorsItem from "../../components/Authors/AuthorsItem";

import "./Authors.css";

class Authors extends Component {
  componentDidMount() {
    this.props.onInitAuthors();
  }

  render() {
    if (this.props.authors) {
      return (
        <div className="authors-list">
          {this.props.authors.map(author => (
            <AuthorsItem
              key={author.id}
              id={author.id}
              name={author.name}
              country={author.country}
            />
          ))}
        </div>
      );
    } else {
      return <div> LOADING </div>;
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
