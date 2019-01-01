import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      question: "",
      answer: "",
      role: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      question: this.state.question,
      answer: this.state.answer,
      role: this.state.role
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container register rounded">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p className="text">
              You are 30 seconds away from finding your dream career
            </p>
            <p>Already have an account?</p>
            <Link className="btn btn-white" to="/login">
              Login
            </Link>
          </div>
          <div className="col-md-9 register-right">
            <div className="tab-content" id="myTabContent">
              <h3 className="display-4 register-heading">
                Register with Jobspection
              </h3>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="row register-form">
                  <div className="col-md-6">
                    <TextFieldGroup
                      placeholder="Enter Full Name"
                      name="name"
                      id="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextFieldGroup
                      placeholder="Create Password"
                      name="password"
                      type="password"
                      id="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />
                    <TextFieldGroup
                      placeholder="Repeat Password"
                      name="password2"
                      type="password"
                      id="password2"
                      value={this.state.password2}
                      onChange={this.onChange}
                      error={errors.password2}
                    />
                    <fieldset
                      onChange={this.onChange}
                      className="form-group pl-3"
                    >
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="gridRadios1"
                          value="employee"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridRadios1"
                        >
                          Employee
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="gridRadios2"
                          value="employer"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridRadios2"
                        >
                          Employer
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <TextFieldGroup
                      placeholder="example@xyz.com"
                      name="email"
                      type="email"
                      id="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="question"
                        value={this.state.question}
                        onChange={this.onChange}
                      >
                        <option className="hidden" disabled>
                          Choose A Security Question
                        </option>
                        <option>Who is your childhood sports hero?</option>
                        <option>
                          What school did you attend for sixth grade?
                        </option>
                        <option>In what town was your first job?</option>
                        <option>What is your Pet Name?</option>
                        <option>What was your childhood nickname?</option>
                      </select>
                    </div>
                    <TextFieldGroup
                      placeholder="Your Answer"
                      name="answer"
                      id="answer"
                      value={this.state.answer}
                      onChange={this.onChange}
                      error={errors.answer}
                    />
                    <input
                      type="submit"
                      className="btnRegister"
                      value="Register"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
