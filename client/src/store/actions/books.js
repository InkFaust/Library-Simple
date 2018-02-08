import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const fetchBooksFailed = () => {
  return {
    type: actionTypes.FETCH_BOOKS_FAILED
  };
};

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
        dispatch(setBooks(response.data));
      })
      .catch(error => {
        dispatch(fetchBooksFailed());
      });
  };
};

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
        dispatch(setBook(response.data));
      })
      .catch(error => {
        dispatch(fetchBooksFailed());
      });
  };
};
