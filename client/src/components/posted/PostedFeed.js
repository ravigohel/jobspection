import React, { Component } from "react";
import PropTypes from "prop-types";
import PostedItem from "./PostedItem";

class PostedFeed extends Component {
  render() {
    const { posts } = this.props;

    return posts.map(post => <PostedItem key={post._id} post={post} />);
  }
}

PostedFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostedFeed;
