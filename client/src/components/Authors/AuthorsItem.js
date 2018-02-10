import React from "react";
import PropTypes from "prop-types";

import "./AuthorsItem.css";

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  country: PropTypes.string
};

function BookItem(props) {
  return (
    <div className="author-item">
      <div className="author-item__name">{props.name}</div>
      <div className="author-item__country">
        Country: <span>{props.country}</span>
      </div>
    </div>
  );
}

BookItem.propTypes = propTypes;

export default BookItem;
