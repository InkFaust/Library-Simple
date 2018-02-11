import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as authorsActions from "../../../store/actions";

import "./Author.css";
import writerBk from "../../../assets/img/writer.jpg";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Loader from "../../../components/Loader/Loader";
import AuthorUI from "../../../components/AuthorsUI/AuthorUI/AuthorUI";
import Navigation from "../../../components/Navigation/Navigation";
import LinkEl from "../../../components/Navigation/LinkEl/LinkEl";

const propTypes = {
  onInitAuthor: PropTypes.func,
  author: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    country: PropTypes.string
  }),
  authorBooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      pages: PropTypes.number,
      title: PropTypes.string,
      year: PropTypes.number
    })
  ),
  error: PropTypes.bool,
  match: PropTypes.object
};

const style = {
  backgroundImage: `url(${writerBk})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

class Author extends Component {
  componentDidMount() {
    const id = this.parseParam();
    this.props.onInitAuthor(id);
    this.props.onInitAuthorBooks(id);
  }

  componentDidUpdate() {
    const id = this.parseParam();
    if (this.props.author.id !== id) {
      this.props.onInitAuthor(id);
      this.props.onInitAuthorBooks(id);
    }
  }

  parseParam() {
    return parseInt(this.props.match.params.id, 10);
  }

  render() {
    if (this.props.author) {
      const { name, country } = this.props.author;
      const { authorBooks } = this.props;

      return (
        <div className="container-author" style={style}>
          <Navigation className="list-navigation">
            <LinkEl exact to="/">
              Home
            </LinkEl>
            <LinkEl exact to="/books/">
              Books
            </LinkEl>
            <LinkEl exact to="/authors/">
              Authors
            </LinkEl>
          </Navigation>
          <div className="container-center-author">
            <AuthorUI name={name} country={country} books={authorBooks} />
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

Author.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    author: state.author,
    authorBooks: state.authorBooks,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitAuthor: id => dispatch(authorsActions.initAuthor(id)),
    onInitAuthorBooks: id => dispatch(authorsActions.initAuthorBooks(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withErrorHandler(Author)
);
