import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import "./BooksItem.css";

const propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  bookId: PropTypes.number
};

function BookItem(props) {
  return (
    <div className="book-item">
      <Link
        to={`${props.match.path}/${props.bookId}`}
        className="book-item__title"
      >
        {props.title}
      </Link>
      <div className="book-item__author">
        Author: <br /> <span>{props.author}</span>
      </div>
    </div>
  );
}

BookItem.propTypes = propTypes;

export default withRouter(BookItem);
