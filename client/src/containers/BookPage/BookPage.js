import React, { Component } from "react";
import { connect } from "react-redux";
import * as booksActions from "../../store/actions";

class BookPage extends Component {
  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { id } = await this.props.match.params;
    this.props.onInitBook(id);
  }

  render() {
    console.log(this.props);
    if (this.props.book) {
      return <div className="book-page" />;
    } else {
      return <div> LOADING </div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    book: state.book,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitBook: id => dispatch(booksActions.initBook(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
