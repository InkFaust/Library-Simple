import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./AuthorUI.css";
import Loader from "../../Loader/Loader";

const propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  year: PropTypes.number,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      pages: PropTypes.number,
      title: PropTypes.string,
      year: PropTypes.number
    })
  )
};

function AuthorUI(props) {
  const { name, country, books } = props;

  if (books) {
    return (
      <div className="author-item">
        <div className="author-item__name">{name}</div>
        <div className="author-item__country">
          Country: <span>{country}</span>
        </div>
        <div className="author-books-title">Books:</div>
        <ul className="author-books-list">
          {books.map(book => (
            <li className="author-books-list__el" key={book.id}>
              <Link className="author-books__link" to={`/books/${book.id}`}>
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <Loader />;
  }
}

AuthorUI.propTypes = propTypes;

export default AuthorUI;
