import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const SignUpForm = ({ values, errors, touched, status }) => {
  const [newUser, setNewUser] = useState([]);
useEffect(() => {
  if(status){
    setNewUser([...newUser, status])
  }
},[status]);

  return (
    <div>
      <Form>
      <label>
          Name
          <Field type="text" name="name" />
          {touched.name && errors.name && (
            <p>{errors.name}</p>
          )}
        </label>
        <label>
          Username
          <Field type="text" name="username" />
          {touched.username && errors.username && (
            <p>{errors.username}</p>
          )}
        </label>
        <label>
          Email
          <Field type="email" name="email" />
          {touched.email && errors.email && (
            <p>{errors.email}</p>
          )}
        </label>
        <label>
          Password
          <Field type="text" name="password" />
          {touched.password && errors.password && (
            <p>{errors.password}</p>
          )}
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
            
            <Field type="checkbox" name='age' checked={values.age}/>
            I am at least 13 years of age
            {errors.age && <p>{errors.age}</p>}
        </label>
        <label>
            I have read and agree to the Terms of Service
            <Field type="checkbox" name='tos' checked={values.tos}/>
            I have read and agree to the Terms of Service
            {errors.tos && <p>{errors.tos}</p>}
        </label>
        <button type="submit">Join Now!</button>
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
  },

//===========Validation Schema=====================

validationSchema: Yup.object().shape({
    name:Yup.string().required("Please enter your name"),
    username:Yup.string().required("Please enter a username"),
    email:Yup.string().email("please enter a valid email address").required("please enter an email address"),
    password: Yup.string().min(8, 'passwords must be at least 8 characters').required('please enter a password'),
    age: Yup.bool().oneOf([true], "You must be 13 or older to sign up"),
    tos: Yup.bool().oneOf([true], "You must accept the Terms to sign up")
    
}),
//==========End Schema=============================

handleSubmit(values, { setStatus }){
  axios
    .post("https://reqres.in/api/users", values)
    .then(res =>{
      setStatus(res.data);
    })
    .catch(err => console.log(err.res));
}


})(SignUpForm);
