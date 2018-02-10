import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import "./BooksUI.css";

const propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  authorId: PropTypes.number,
  bookId: PropTypes.number,
  match: PropTypes.object
};

function BooksUI(props) {
  const { path } = props.match;
  const { author, title, bookId, authorId } = props;

  return (
    <div className="books-item">
      <Link to={`${path}/${bookId}`} className="books-item__title">
        {title}
      </Link>
      <div className="books-item__author">
        Author: <br />
        <Link to={`/authors/${authorId}`} className="books-item__link">
          {author}
        </Link>
      </div>
    </div>
  );
}

BooksUI.propTypes = propTypes;

export default withRouter(BooksUI);
