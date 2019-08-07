import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import gameDie from './gameDie.jpg'

const UserForm = ({ values, errors, touched, handleSubmit, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers(users => [...users, status]);
    }
  }, [status]);

  return (
    <>
      <div className="user-form">
        <h1> Create an Account</h1>
        <Form>
          <Field type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
          <Field type="email" name="email" placeholder="eMail" />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <Field component="select" className="select-field" name="role">
            <option>Please Select Your Role</option>
            <option>Pathfinder</option>
            <option>Venture Captain</option>
            <option>Masked Decemvirate</option>
          </Field>
          <label className="checkbox-container">
            I am at least 13 years of age
            <Field type="checkbox" name="age" checked={values.age} />
            {errors.age && <p className="error">{errors.age}</p>}
            <span className="checkmark" />
            </label>
            <label className="checkbox-container">
            <Field type="checkbox" name="tos" checked={values.tos} />I agree to
            the Terms of Service
            {errors.tos && <p className="error">{errors.tos}</p>}
            <span className="checkmark" />
          </label>

          <Field component="select" className="select-field" name="reach">
            <option>How did you hear about us?</option>
            <option>My FLGS</option>
            <option>Gaming Group</option>
            <option>Forums</option>
            <option>Other</option>
          </Field>

          <button type="submit">Sign Up!</button>
        </Form>
      </div>
      <div className="display-users">
        <img src={gameDie} width='450' alt='thrown die'/>
        <h2>Our Players</h2>
        {users.map(user => (
          <div className='user' key={useEffect.id}>
          <p>{user.username} <span className = 'sub'>   -{user.role}</span></p>
          
          </div>
        ))}
      </div>
    </>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({ username, email, password, tos, age, role, reach }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      role: role || "",
      age: age || false,
      tos: tos || false,
      reach: reach || ""
    };
  },

  //=======Validation Schema==========

  validationSchema: Yup.object().shape({
    username: Yup.string().required("username is required"),
    email: Yup.string().required("email is required"),
    password: Yup.string()
      .min(8, "passwords must be at least 8 characters")
      .required("Password is required"),
    age: Yup.bool().oneOf([true], "You must be 13 or older to sign up"),
    tos: Yup.bool().oneOf(
      [true],
      "You must accept the Terms of Service to sign up"
    )
  }),

  //========End Schema===============

  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        setStatus(res.data);
        resetForm({username:'', email: '', password: '', role: '', age: false, tos: false, reach: ''})
      })
      .catch(err => console.log("error", err.response));
  }
})(UserForm);

export default FormikUserForm;
