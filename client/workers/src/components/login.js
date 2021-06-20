import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import WorkerService from '../services/workers'

export default function Login({tokenCB}) {
    const [loginValues, setLoginValues] = useState({
        email: "",
        password: ""
    })

    const login = async(values) => {
        console.log(values);
        const token = await WorkerService.login(values);
        tokenCB(token);
    }
    return (
        <Formik initialValues={{
            email: "",
            password: ""
        }} onSubmit={login}>
            <Form>
                <div className="form-group">
                    <Field className="form-control" type="email" name="email" placeholder="enter your email" />
                </div>
                <div className="form-group">
                    <Field className="form-control" type="password" name="password" placeholder="enter your password" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">submit</button>
                </div>
            </Form>
        </Formik>
    )
}