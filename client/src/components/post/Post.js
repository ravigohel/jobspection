import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import PostDetails from "../post/PostDetails";
import { getPost } from "../../actions/postActions";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }
  render() {
    const { post, loading } = this.props.post;

    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/dashboard" className="btn btn-light mb-3 float-left">
                Back To Dashboard
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <PostDetails post={post} />
        </div>
      );
    }

    return (
      <div className="marginContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{postContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
