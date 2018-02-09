import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./LinkEl.css";

const propTypes = {
  to: PropTypes.string,
  className: PropTypes.string
};

function LinkEl(props) {
  return (
    <NavLink
      to={props.to}
      activeClassName="active"
      className={props.className ? `link ${props.className}` : `link`}
    >
      {props.children}
    </NavLink>
  );
}

LinkEl.propTypes = propTypes;

export default LinkEl;
