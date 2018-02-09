import React from "react";
import PropTypes from "prop-types";

import "./BookInfo.css";

const propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  year: PropTypes.number
};

function bookInfo(props) {
  return (
    <div className="book-info">
      <div className="book-info__name">{props.name}</div>
      <div className="book-info__author">
        Author: <span>{props.author}</span>
      </div>
      <div className="book-info__pages">Pages: {props.pages}</div>
      <div className="book-info__year">Year: {props.year}</div>
    </div>
  );
}

bookInfo.propTypes = propTypes;

export default bookInfo;
