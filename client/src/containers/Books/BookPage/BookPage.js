import React, { Component } from "react";
import { connect } from "react-redux";
import * as booksActions from "../../../store/actions";

import "./BookPage.css";
import libraryBk from "../../../assets/img/library.jpg";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Loader from "../../../components/Loader/Loader";
import BookInfo from "../../../components/Books/BookInfo/BookInfo";

const style = {
  backgroundImage: `url(${libraryBk})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

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
        <div className="container-book" style={style}>
          <div className="container-center-book">
            <BookInfo name={title} author={name} year={year} pages={pages} />
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
