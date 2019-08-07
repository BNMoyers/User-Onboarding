import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup';
import { __values } from 'tslib';

const UserForm = (values) => {

    return(
        <div>
            <h1> Create an Account</h1>
            <Form>
                <Field type='text' name='username' placeholder='Username' />
                <Field type='email' name='email' placeholder='EMail' />
                <Field type='password' name='password' placeholder='Password' />
                <label>
                    I agree to the Terms of Service
                <Field type='checkbox' name='tos' checked={values.tos} />
                    
                </label>
                <button type='submit'>Sign Up!</button>


            </Form>
        </div>
    )
}

export default UserForm;