import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { addLike, removeLike } from "../../actions/postActions";

class PostItem extends Component {
  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, showActions } = this.props;

    return (
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-3 text-center m-auto px-0 py-3">
            <img src={post.avatar} alt={post.designation} />
          </div>
          <div className="col-md-9 m-auto p-0">
            <div className="card-body m-2">
              <h2 className="card-title">
                {post.designation} - {post.location}
              </h2>
              <div className="mx-2">
                <ul className="list-unstyled">
                  <li>
                    <b>Date Posted:&nbsp;</b>
                    <Moment format="DD/MM/YYYY">{post.created}</Moment>
                  </li>
                  <li>
                    <b>Salary:&nbsp;</b>₹{post.salary / 100000}&nbsp;lacs/annum
                  </li>
                  <li>
                    <b>Experience Required:&nbsp;</b>
                    {post.experience} years
                  </li>
                </ul>
                <p className="card-text">{post.description}</p>
              </div>
            </div>
            <div className="card-footer mx-3 p-2">
              <div className="row px-3">
                {showActions ? (
                  <span>
                    <button
                      onClick={this.onLikeClick.bind(this, post._id)}
                      type="button"
                      className="btn btn-light mr-1"
                    >
                      <i
                        className={classnames("fas fa-thumbs-up", {
                          "text-info": this.findUserLike(post.likes)
                        })}
                      />
                      <span className="badge badge-light">
                        {post.likes.length}
                      </span>
                    </button>
                    <button
                      onClick={this.onUnlikeClick.bind(this, post._id)}
                      type="button"
                      className="btn btn-light mr-1"
                    >
                      <i className="text-secondary fas fa-thumbs-down" />
                    </button>
                  </span>
                ) : null}
                <Link to={`/post/${post._id}`} className="btn btn-info ml-auto">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike }
)(PostItem);
