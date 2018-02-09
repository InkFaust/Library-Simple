import React from "react";
import PropTypes from "prop-types";

import "./Navigation.css";

const propTypes = {
  className: PropTypes.string
};

function Navigation(props) {
  const children = props.children;
  return (
    <ul className={props.className ? `list ${props.className}` : "list"}>
      {React.Children.map(children, child => (
        <li className="list__el">{child}</li>
      ))}
    </ul>
  );
}

Navigation.propTypes = propTypes;

export default Navigation;
