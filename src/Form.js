import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup';

const UserForm = props => {

    return(
        <div>
            <h1> Create an Account</h1>
            <Form>
                <Field type='text' name='username' placeholder='Username' />
                <Field type='email' name='email' placeholder='EMail' />
                <Field type='text' name='password' placeholder='Password' />


            </Form>
        </div>
    )
}

export default UserForm;