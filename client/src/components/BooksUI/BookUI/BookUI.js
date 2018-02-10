import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./BookUI.css";

const propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  authorId: PropTypes.number,
  pages: PropTypes.number,
  year: PropTypes.number
};

function BookUI(props) {
  const { name, authorId, author, pages, year } = props;

  return (
    <div className="book-item">
      <div className="book-item__name">{name}</div>
      <div className="book-item__author">
        {`Author: `}
        <Link to={`/authors/${authorId}`} className="books-item__link">
          {author}
        </Link>
      </div>
      <div className="book-item__pages">Pages: {pages}</div>
      <div className="book-item__year">Year: {year}</div>
    </div>
  );
}

BookUI.propTypes = propTypes;

export default BookUI;
