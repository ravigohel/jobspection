import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostedFeed from "./PostedFeed";
import Spinner from "../common/Spinner";
import { getUserPosts } from "../../actions/postActions";

class MyPosts extends Component {
  componentDidMount() {
    this.props.getUserPosts(this.props.match.params.user);
  }
  render() {
    const { posts, loading } = this.props.post;

    let postedContent;

    if (loading) {
      postedContent = <Spinner />;
    } else {
      postedContent = <PostedFeed posts={posts} />;
    }
    return (
      <div className="marginContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{postedContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

MyPosts.propTypes = {
  getUserPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getUserPosts }
)(MyPosts);
