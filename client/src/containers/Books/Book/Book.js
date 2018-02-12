import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as booksActions from "../../../store/actions";

import "./Book.css";
import libraryBk from "../../../assets/img/library.jpg";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Loader from "../../../components/Loader/Loader";
import BookUI from "../../../components/BooksUI/BookUI/BookUI";
import Navigation from "../../../components/Navigation/Navigation";
import LinkEl from "../../../components/Navigation/LinkEl/LinkEl";

const propTypes = {
  onInitBook: PropTypes.func,
  book: PropTypes.shape({
    id: PropTypes.number,
    pages: PropTypes.number,
    year: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      country: PropTypes.string
    })
  }),
  error: PropTypes.bool
};

const style = {
  backgroundImage: `url(${libraryBk})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

class Book extends Component {
  componentDidMount() {
    const id = this.parseParam();
    this.props.onInitBook(id);
  }

  componentWillReceiveProps(nextProps) {
    const id = this.parseParam();
    if (nextProps.book.id !== id) {
      this.props.onInitBook(id);
    }
  }

  parseParam() {
    return parseInt(this.props.match.params.id, 10);
  }

  render() {
    if (this.props.book) {
      const { title, year, pages } = this.props.book;
      const { name, id } = this.props.book.author;

      return (
        <div className="container-book" style={style}>
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
          <div className="container-center-book">
            <BookUI
              name={title}
              author={name}
              authorId={id}
              year={year}
              pages={pages}
            />
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

Book.propTypes = propTypes;

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
  withErrorHandler(Book)
);
