import React from "react";

const Validation = (values) => {
  let errors = {};

  if (!values.user) {
    errors.user = "username is required";
  }
  if (!values.email) {
    errors.email = "email is required";
  }

  return errors;
};

export default Validation;
