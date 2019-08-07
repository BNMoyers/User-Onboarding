import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup';
import { __values } from 'tslib';
import { animationFrameScheduler } from 'rxjs';

const UserForm = ({ values, errors, touched, handleSubmit, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if(status) {
            setUsers([...users, status])
        }
    })
    return(
        <div>
            <h1> Create an Account</h1>
            <Form>
                <Field type='text' name='username' placeholder='Username' />
                {touched.username && errors.username && (
                    <p>{errors.username}</p>
                )}
                <Field type='email' name='email' placeholder='EMail' />
                {touched.email && errors.email && (
                    <p>{errors.email}</p>
                )}
                <Field type='password' name='password' placeholder='Password' />
                
                <label>
                    I agree to the Terms of Service
                <Field type='checkbox' name='tos' checked={values.tos} />
                    
                </label>
                <button type='submit'>Sign Up!</button>


            </Form>

            <div className = 'displayUsers'>
                {users.map(user => (
                    <p key={useEffect.id}>{user.username}</p>
                ))}
            </div>
        </div>
    )
};

const FormikUserForm = withFormik({
    mapPropsToValues({ username, email, password, tos }) {
        return {
            username: username || '',
            email: email || '', 
            password: password || '',
            tos: tos || false
        };
    },

    //=======Validation Schema==========

    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string()..min(8).(required('passwords must be at least 8 characters'),
    }),


    //========End Schema===============




})(UserForm);

export default FormikUserForm;