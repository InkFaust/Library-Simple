import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as authorsActions from "../../store/actions";

import Loader from "../../components/Loader/Loader";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import AuthorsUI from "../../components/AuthorsUI/AuthorsUI";

import writerBk from "../../assets/img/writer.jpg";
import "./Authors.css";

const propTypes = {
  onInitAuthors: PropTypes.func,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      country: PropTypes.string,
      name: PropTypes.string
    })
  ),
  error: PropTypes.bool
};

const style = {
  backgroundImage: `url(${writerBk})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

class Authors extends Component {
  componentDidMount() {
    this.props.onInitAuthors();
  }

  render() {
    if (this.props.authors) {
      const { authors } = this.props;

      return (
        <div className="container-authors" style={style}>
          <div className="container-center-authors">
            {authors.map(author => (
              <AuthorsUI
                key={author.id}
                id={author.id}
                name={author.name}
                country={author.country}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

Authors.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    authors: state.authors,
    books: state.books,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitAuthors: () => dispatch(authorsActions.initAuthors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withErrorHandler(Authors)
);
