import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import "./BooksItem.css";

const propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  bookId: PropTypes.number
};

function BooksItem(props) {
  return (
    <div className="books-item">
      <Link
        to={`${props.match.path}/${props.bookId}`}
        className="books-item__title"
      >
        {props.title}
      </Link>
      <div className="books-item__author">
        Author: <br /> <span>{props.author}</span>
      </div>
    </div>
  );
}

BooksItem.propTypes = propTypes;

export default withRouter(BooksItem);
