import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const SignUpForm = ({ values }) => {
  return (
    <div>
      <Form>
        <label>
          Username
          <Field type="text" name="username" />
        </label>
      </Form>
    </div>
  );
};

export const FormikSignUpForm = withFormik({
  mapPropsToValues({ username }) {
    return {
      username: username || ""
    };
  }
})(SignUpForm);
