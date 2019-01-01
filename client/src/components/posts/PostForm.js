import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { addPost } from "../../actions/postActions";
import { locationArray } from "../common/LocationArray";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designation: "",
      location: "",
      salary: "",
      workingHours: "",
      qualification: "",
      experience: "",
      perks: "",
      description: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      handle: user.handle,
      designation: this.state.designation,
      location: this.state.location,
      salary: this.state.salary,
      workingHours: this.state.workingHours,
      qualification: this.state.qualification,
      experience: this.state.experience,
      perks: this.state.perks,
      description: this.state.description
    };

    this.props.addPost(newPost);
    this.setState({ designation: "" });
    this.setState({ location: "" });
    this.setState({ salary: "" });
    this.setState({ workingHours: "" });
    this.setState({ qualification: "" });
    this.setState({ experience: "" });
    this.setState({ perks: "" });
    this.setState({ description: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;

    // Select options for designation
    const statusOptions = [
      { label: "* Select Designation", value: 0 },
      { label: "Branch Manager", value: "Branch Manager" },
      { label: "Physics Faculty", value: "Physics Faculty" },
      { label: "Chemistry Faculty", value: "Chemistry Faculty" },
      { label: "Mathematics Faculty", value: "Mathematics Faculty" },
      { label: "Biology Faculty", value: "Biology Faculty" },
      { label: "Web Developer", value: "Web Developer" },
      { label: "Android Developer", value: "Android Developer" },
      { label: "iOS Developer", value: "iOS Developer" },
      { label: "Graphic Designer", value: "Graphic Designer" },
      { label: "Receptionist", value: "Receptionist" },
      { label: "Other", value: "Other" }
    ];

    // Select options for location
    const locationOptions = locationArray;

    return (
      <div className="marginContainer">
        <div className="container">
          <div className="row">
            <div class="col-md-12">
              <div className="m-auto">
                <form onSubmit={this.onSubmit}>
                  <h2 className="display-4 text-center">
                    Enter Vacancy Details
                  </h2>
                  <small className="d-block pb-3">* = required fields</small>
                  <br />
                  <div className="row rounded px-5">
                    <div className="col-md-6">
                      <SelectListGroup
                        placeholder="Designation"
                        name="designation"
                        value={this.state.designation}
                        onChange={this.onChange}
                        options={statusOptions}
                        error={errors.designation}
                        info="You must tell the position you want people to apply for"
                      />
                      <SelectListGroup
                        placeholder="Location"
                        name="location"
                        value={this.state.location}
                        onChange={this.onChange}
                        options={locationOptions}
                        error={errors.location}
                        info="The position is vacant at"
                      />
                      <TextFieldGroup
                        placeholder="* Salary"
                        name="salary"
                        type="number"
                        value={this.state.salary}
                        onChange={this.onChange}
                        error={errors.salary}
                        info="How much does the candidate get each year after getting hired?"
                      />
                      <TextAreaFieldGroup
                        placeholder="Perks"
                        name="perks"
                        value={this.state.perks}
                        onChange={this.onChange}
                        error={errors.perks}
                        info="In addition to salary, perks provided attract more candidates"
                      />
                    </div>
                    <div className="col-md-6">
                      <TextFieldGroup
                        placeholder="Qualification required"
                        name="qualification"
                        value={this.state.qualification}
                        onChange={this.onChange}
                        error={errors.qualification}
                        info="Qualification or a degree to be specific required for the job!"
                      />
                      <TextFieldGroup
                        placeholder="Working Hours Per Week"
                        name="workingHours"
                        type="number"
                        value={this.state.workingHours}
                        onChange={this.onChange}
                        error={errors.workingHours}
                        info="How many hours does the candidate has to work in a normal average week?"
                      />
                      <TextFieldGroup
                        placeholder="Experience required in years"
                        name="experience"
                        type="number"
                        value={this.state.experience}
                        onChange={this.onChange}
                        error={errors.experience}
                        info="How many years of experience should the candidate must have in order to apply"
                      />
                      <TextAreaFieldGroup
                        placeholder="* Job Description"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                        error={errors.description}
                        info="Have something to tell users, or maybe give them an idea of what kind of workplace they would be working in?"
                      />
                      <div className="text-right">
                        <button type="submit" className="btn btn-info">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
