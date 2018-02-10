import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import "./AuthorsUI.css";

const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  country: PropTypes.string,
  match: PropTypes.object
};

function AuthorsUI(props) {
  const { path } = props.match;
  const { id, name, country } = props;

  return (
    <div className="authors-item">
      <Link to={`${path}/${id}`} className="authors-item__name">
        {name}
      </Link>
      <div className="authors-item__country">
        Country: <span>{country}</span>
      </div>
    </div>
  );
}

AuthorsUI.propTypes = propTypes;

export default withRouter(AuthorsUI);
