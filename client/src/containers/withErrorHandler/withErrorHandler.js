import React, { Component } from "react";

const withErrorHandler = WrappedComponent => {
  return class extends Component {
    render() {
      if (!this.props.error) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <div>MODAL ERROR</div>;
      }
    }
  };
};

export default withErrorHandler;
