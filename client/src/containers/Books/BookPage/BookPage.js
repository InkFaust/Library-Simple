import React, { Component } from "react";
import { connect } from "react-redux";
import * as booksActions from "../../../store/actions";

import "./BookPage.css";

import withErrorHandler from "../../withErrorHandler/withErrorHandler";
import BookInfo from "../../../components/Books/BookInfo/BookInfo";

class BookPage extends Component {
  componentDidMount() {
    const id = this.parseParam();
    this.props.onInitBook(id);
  }

  componentDidUpdate() {
    const id = this.parseParam();
    if (this.props.book.id !== id) {
      this.props.onInitBook(id);
    }
  }

  parseParam() {
    return parseInt(this.props.match.params.id, 10);
  }

  render() {
    if (this.props.book) {
      const { title, year, pages } = this.props.book;
      const { name } = this.props.book.author;
      return (
        <div className="book-page">
          <BookInfo name={title} author={name} year={year} pages={pages} />
        </div>
      );
    } else {
      return <div> LOADING </div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    book: state.book,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitBook: id => dispatch(booksActions.initBook(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withErrorHandler(BookPage)
);
