import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileActions";

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(edu => (
      <tr className="table-success" key={edu._id}>
        <td>{edu.institute}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format="DD/MM/YYYY">{edu.from}</Moment> -
          {edu.to === null ? (
            " Current"
          ) : (
            <Moment format="DD/MM/YYYY">{edu.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, edu._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Education Credentials</h4>
        <table className="table table-hover">
          <thead className="bg-main text-light">
            <tr>
              <th>Institute</th>
              <th>Degree</th>
              <th>Period</th>
              <th />
            </tr>
          </thead>
          <tbody>{education}</tbody>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
