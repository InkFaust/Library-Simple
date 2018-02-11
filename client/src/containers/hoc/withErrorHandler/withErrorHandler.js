import React, { Component } from "react";

import Error from "../../../components/Loader/Error/Error";

function withErrorHandler(WrappedComponent) {
  return class extends Component {
    render() {
      if (!this.props.error) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Error />;
      }
    }
  };
}

export default withErrorHandler;
