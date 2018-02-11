import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as booksActions from "../../store/actions";

import "./Books.css";
import libraryBk from "../../assets/img/library.jpg";

import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import Loader from "../../components/Loader/Loader";
import BooksUI from "../../components/BooksUI/BooksUI";
import Navigation from "../../components/Navigation/Navigation";
import LinkEl from "../../components/Navigation/LinkEl/LinkEl";

const propTypes = {
  onInitBooks: PropTypes.func,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      pages: PropTypes.number,
      year: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        country: PropTypes.string
      })
    })
  ),
  error: PropTypes.bool
};

const style = {
  backgroundImage: `url(${libraryBk})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed"
};

class Books extends Component {
  componentDidMount() {
    this.props.onInitBooks();
  }

  render() {
    if (this.props.books && !this.props.error) {
      const { books } = this.props;

      return (
        <div className="container-books" style={style}>
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
          <div className="container-center-books">
            {books.map(book => (
              <BooksUI
                key={book.id}
                title={book.title}
                author={book.author.name}
                bookId={book.id}
                authorId={book.author.id}
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

Books.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    books: state.books,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitBooks: () => dispatch(booksActions.initBooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withErrorHandler(Books)
);
