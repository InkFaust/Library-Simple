import * as actionTypes from "../actions/actionTypes";

const initialState = {
  books: null,
  book: null,
  authors: null,
  authorBooks: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS_FAILED:
      return {
        ...state,
        error: true
      };

    case actionTypes.SET_BOOKS:
      return {
        ...state,
        books: action.books,
        error: false
      };

    case actionTypes.SET_BOOK:
      return {
        ...state,
        book: action.book,
        error: false
      };

    case actionTypes.SET_AUTHORS:
      return {
        ...state,
        authors: action.authors,
        error: false
      };

    case actionTypes.SET_AUTHOR:
      return {
        ...state,
        author: action.author,
        error: false
      };

    case actionTypes.SET_AUTHOR_BOOKS:
      return {
        ...state,
        authorBooks: action.authorBooks,
        error: false
      };

    default:
      return state;
  }
};

export default reducer;
