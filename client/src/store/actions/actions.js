import * as actionTypes from "./actionTypes";
import axios from "../../axios";

//FETCH ERROR
export const fetchBooksFailed = () => {
  return {
    type: actionTypes.FETCH_BOOKS_FAILED
  };
};

//BOOKS
export const setBooks = books => {
  return {
    type: actionTypes.SET_BOOKS,
    books: books
  };
};

export const initBooks = () => {
  return dispatch => {
    axios
      .get("/api/books/")
      .then(response => {
        if (response.data) {
          dispatch(setBooks(response.data));
        } else {
          dispatch(fetchBooksFailed());
        }
      })
      .catch(error => {
        dispatch(fetchBooksFailed());
      });
  };
};

//BOOK
export const setBook = book => {
  return {
    type: actionTypes.SET_BOOK,
    book: book
  };
};

export const initBook = id => {
  return dispatch => {
    axios
      .get("/api/books/" + id)
      .then(response => {
        if (response.data) {
          dispatch(setBook(response.data));
        } else {
          dispatch(fetchBooksFailed());
        }
      })
      .catch(error => {
        dispatch(fetchBooksFailed());
      });
  };
};

//AUTHORS
export const setAuthors = authors => {
  return {
    type: actionTypes.SET_AUTHORS,
    authors: authors
  };
};

export const initAuthors = () => {
  return dispatch => {
    axios
      .get("/api/authors/")
      .then(response => {
        if (response.data) {
          dispatch(setAuthors(response.data));
        } else {
          dispatch(fetchBooksFailed());
        }
      })
      .catch(error => {
        dispatch(fetchBooksFailed());
      });
  };
};
