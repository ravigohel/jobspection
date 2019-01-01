import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="marginContainer">
        <div className="container rounded login-container">
          <div className="row d-md-flex justify-content-center">
            <div className="col-md-6 login-form">
              <h3 className="display-4">Login</h3>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Your Email Address"
                  name="email"
                  type="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  placeholder="Your Password"
                  name="password"
                  type="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
                <div className="form-group">
                  <Link
                    to="/forgotpassword"
                    className="ForgetPwd"
                    value="Login"
                  >
                    Forget Password?
                  </Link>
                </div>
                <div className="form-group text-right">
                  <p className="text-light">Don't have an account?</p>
                  <Link className="btn btn-white" to="/register">
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
