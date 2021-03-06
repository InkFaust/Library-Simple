import React from "react";

import "./Error.css";
import Loader from "../Loader";

function Error() {
  return (
    <div className="container-error">
      <div className="container-center-error">
        <div className="error-message">
          Sorry, the requested page wasn't found or server has refused your
          request
        </div>
        <Loader />
        <div className="error-message">BTW, I really need a designer...</div>
      </div>
    </div>
  );
}

export default Error;
