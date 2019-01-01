import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    let authLinks;

    if (user.role === "employee") {
      // Show when user is authenticated
      authLinks = (
        <ul className="navbar-nav ml-auto mr-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobs">
              View Jobs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <a onClick={this.onLogoutClick.bind(this)} className="nav-link">
              <img
                href=""
                className="rounded-circle"
                src={user.avatar}
                alt={user.name}
                style={{ width: "25px", marginRight: "5px" }}
                title="You must have a Gravatar connected to your email to display an image"
              />
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      // Show when user is authenticated
      authLinks = (
        <ul className="navbar-nav ml-auto mr-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href=""
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle"
                alt={user.name}
                style={{ width: "32px", height: "32px", marginTop: "-7px" }}
                src={user.avatar}
                title="You must have a Gravatar connected to your email to display an image"
              />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/dashboard">
                Hi, {user.name}
              </Link>
              <Link className="dropdown-item" to="/hire">
                Post Jobs
              </Link>
              <Link className="dropdown-item" to={`/posted/${user.id}`}>
                My Jobs
              </Link>
              <div className="dropdown-divider" />
              <a
                href="#"
                onClick={this.onLogoutClick.bind(this)}
                className="dropdown-item"
              >
                Logout
              </a>
            </div>
          </li>
        </ul>
      );
    }

    // Show when user is not authenticated
    const guestLinks = (
      <ul className="navbar-nav ml-auto mr-3">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/jobs">
            Find Jobs
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hire">
            Post Jobs
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav
        className="navbar fixed-top navbar-expand-xl navbar-dark bg-main"
        data-spy="affix"
      >
        <div className="container navbar-inner">
          <Link className="navbar-brand text-light mb-0 h1" to="/">
            Jobspection
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
