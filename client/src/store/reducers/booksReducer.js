import * as actionTypes from "../actions/actionTypes";

const initialState = {
  books: null,
  book: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BOOKS:
      return {
        ...state,
        books: action.books,
        error: false
      };
    case actionTypes.FETCH_BOOKS_FAILED:
      return {
        ...state,
        error: true
      };

    case actionTypes.SET_BOOK:
      return {
        ...state,
        book: action.book,
        error: false
      };
    default:
      return state;
  }
};

export default reducer;
