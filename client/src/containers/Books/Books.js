import React, { Component } from "react";
import { connect } from "react-redux";
import * as booksActions from "../../store/actions";

import "./Books.css";

import BooksItem from "../../components/Books/BooksItem";

class Books extends Component {
  componentDidMount() {
    this.props.onInitBooks();
  }

  render() {
    if (this.props.books) {
      return (
        <div className="books-list">
          {this.props.books.map(book => (
            <BooksItem
              key={book.id}
              title={book.title}
              author={book.author.name}
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
    books: state.books,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitBooks: () => dispatch(booksActions.initBooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
