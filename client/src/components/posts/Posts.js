import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostFeed from "./PostFeed";
import Spinner from "../common/Spinner";
import { getPosts } from "../../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let allPosts;

    if (posts === null || loading) {
      allPosts = <Spinner />;
    } else {
      allPosts = <PostFeed posts={posts} />;
    }

    return (
      <div className="marginContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{allPosts}</div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
