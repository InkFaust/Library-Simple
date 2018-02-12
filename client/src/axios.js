import axios from "axios";

function instance() {
  let __API__;
  if (process.env.NODE_ENV === "development") {
    __API__ = "http://localhost:5000";
  } else {
    __API__ = "https://library-simple.herokuapp.com";
  }
  return axios.create({
    baseURL: __API__
  });
}

export default instance;
