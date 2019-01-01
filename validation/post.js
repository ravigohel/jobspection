const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.designation = !isEmpty(data.designation) ? data.designation : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.salary = !isEmpty(data.salary) ? data.salary : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (Validator.isEmpty(data.designation)) {
    errors.designation = "Job designation field is required";
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = "Job location field is required";
  }

  if (Validator.isEmpty(data.salary)) {
    errors.salary = "Salary field is required";
  }

  if (!Validator.isLength(data.description, { min: 20, max: 400 })) {
    errors.description = "Description must be between 20 and 400 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Job description field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
