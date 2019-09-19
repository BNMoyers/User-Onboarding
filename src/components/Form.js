import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const SignUpForm = ({ values }) => {
  return (
    <div>
      <Form>
      <label>
          Name
          <Field type="text" name="name" />
        </label>
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
        <label>
          Where did you Hear About Us?
          <Field component="select" name="reach" >
            <option>Choose One</option>
            <option value='flgs'>Gaming Store</option>
            <option value='wordofmouth'>A Friend</option>
            <option value='forum'>A Forum</option>
            <option value='other'>Other</option>
            </Field>
        </label>
        <label>
            I am at least 13 years of age
            <Field type="checkbox" name='age' checked={values.age}/>
        </label>
        <label>
            I have read and agree to the Terms of Service
            <Field type="checkbox" name='tos' checked={values.tos}/>
        </label>
        <button>Join Now!</button>
      </Form>
    </div>
  );
};

export const FormikSignUpForm = withFormik({
  mapPropsToValues({ name, username, email, password, usertype, ruleset, reach, age, tos }) {
    return {
      name: name || "",
      username: username || "",
      email: email || "",
      password: password || "",
      usertype: usertype || "",
      ruleset: ruleset || "",
      reach: reach || "",
      age: age || false,
      tos: tos || false
    };
  }
})(SignUpForm);
