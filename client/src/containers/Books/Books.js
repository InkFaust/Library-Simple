import React, { Component } from "react";
import { connect } from "react-redux";
import * as booksActions from "../../store/actions";

import "./Books.css";
import libraryBk from "../../assets/img/library.jpg";

import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import Loader from "../../components/Loader/Loader";
import BooksItem from "../../components/Books/BooksItem";

const style = {
  backgroundImage: `url(${libraryBk})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

class Books extends Component {
  componentDidMount() {
    this.props.onInitBooks();
  }

  render() {
    if (this.props.books && !this.props.error) {
      return (
        <div className="container-books" style={style}>
          <div className="container-center-books">
            {this.props.books.map(book => (
              <BooksItem
                key={book.id}
                title={book.title}
                author={book.author.name}
                bookId={book.id}
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
