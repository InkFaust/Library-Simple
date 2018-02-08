import React from "react";
import PropTypes from "prop-types";

import "./BooksItem.css";

const propTypes = {
  title: PropTypes.string,
  author: PropTypes.string
};

function BookItem(props) {
  return (
    <div className="book-item">
      <div className="book-item__title">{props.title}</div>
      <div className="book-item__author">
        Author: <span>{props.author}</span>
      </div>
    </div>
  );
}

BookItem.propTypes = propTypes;

export default BookItem;
