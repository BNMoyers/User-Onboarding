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
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="text" name="password" />
        </label>
        <label>
          Account Type
          <Field component="select" name="usertype" >
            <option>Select an Account Type</option>
            <option value='gm'>Game Master/ Dungeon Master</option>
            <option value='player'>Player</option>
            </Field>
        </label>
        <label>
          Ruleset
          <Field component="select" name="ruleset" >
            <option>Select a Ruleset for Your Game</option>
            <option value='pathfinder'>Pathfinder</option>
            <option value='dnd'>Dungeons and Dragons</option>
            <option value='starfinder'>Starfinder</option>
            <option value='generic'>Other</option>

            
            </Field>
        </label>
      </Form>
    </div>
  );
};

export const FormikSignUpForm = withFormik({
  mapPropsToValues({ username, email, password, usertype, ruleset }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      usertype: usertype || "",
      ruleset: ruleset || "",
    };
  }
})(SignUpForm);
