import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { getProfileByUserID } from "../../actions/profileActions";
import { applyPost } from "../../actions/postActions";

class PostDetails extends Component {
  componentDidMount() {
    this.props.getProfileByUserID();
  }

  onApplyClick(id) {
    this.props.applyPost(id);
  }

  findUserAction(applicants) {
    const { auth } = this.props;
    if (
      applicants.filter(applicant => applicant.user === auth.user.id).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post } = this.props;

    return (
      <div className="jumbotron bg-light">
        <div className="row">
          <div className="col-md-4 col-lg-3 text-center mb-3">
            <img src={post.avatar} alt={post.designation} />
          </div>
          <div className="col-md-8 col-lg-9">
            <h1>{post.designation}</h1>
            <div className="px-3">
              <h4>
                <span>
                  <i className="text-info fas fa-map-marker-alt pr-2" />
                  <b>Location:</b>&nbsp;{post.location}
                </span>
              </h4>
              <h4>
                <span>
                  <i className="text-info fas fa-anchor pr-2" />
                  <b>Applied:</b>&nbsp;{post.applicants.length}
                </span>
              </h4>
              <h4>
                <span>
                  <i className="text-info fas fa-calendar-alt pr-2" />
                  <b>Date Posted:</b>&nbsp;
                  <Moment format="DD/MM/YYYY">{post.created}</Moment>
                </span>
              </h4>
              <h4>
                <span>
                  <i className="text-info fas fa-user pr-2" />
                  <b>Posted By:</b>&nbsp;
                  <Link to={`/profile/${post.handle}`}>{post.name}</Link>
                </span>
              </h4>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <h4 className="mb-3">{post.description}</h4>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li>
                <h5>
                  <b>Salary:</b>&nbsp;₹{post.salary / 100000}&nbsp;lacs/annum
                </h5>
              </li>
              <li>
                <h5>
                  <b>Working Hours:</b>&nbsp;
                  {post.workingHours} hours per week
                </h5>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li>
                <h5>
                  <b>Qualification Required:</b>&nbsp;
                  {post.qualification}
                </h5>
              </li>
              <li>
                <h5>
                  <b>Experience Required:</b>&nbsp;
                  {post.experience} years
                </h5>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-3" />
        <div className="row px-3">
          {this.findUserAction(post.applicants) ? (
            <button type="button" className="btn btn-lg btn-success ml-auto">
              Applied
            </button>
          ) : (
            <button
              onClick={this.onApplyClick.bind(this, post._id)}
              type="button"
              className="btn btn-lg btn-info ml-auto"
            >
              Apply
            </button>
          )}
        </div>
      </div>
    );
  }
}

PostDetails.propTypes = {
  getProfileByUserID: PropTypes.func.isRequired,
  applyPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileByUserID, applyPost }
)(PostDetails);
