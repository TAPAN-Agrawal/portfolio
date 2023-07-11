import React from "react";
import classes from './Contact.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {

    const initialValue = {
        name: "",
        email: "",
        password: "",
        gender: "",
        selectedOption: ''
    }

    const validationSchema = yup.object().shape({
        name: yup.string().required("Name required"),
        email: yup.string().required("Email required"),
        password: yup.string().required("Password required").min(8),
        gender: yup.string().required("Gender required"),
        selectedOption: yup.string().required("Selected option required")


    })
    const submitHandler = (values: any) => {
        localStorage.setItem("details", JSON.stringify(values))
        toast("data stored successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return <>
        <ToastContainer position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
        <h1>ContactUs</h1>
        <div className={classes.main_container}>

            <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={submitHandler}>
                <Form className={classes.form}>
                    <div className={classes.field}>
                        <label>Name</label><br />
                        <Field type="text" name="name" placeholder="enter name" className={classes.item} />
                        <span className={classes.err}><br />
                            <ErrorMessage name="name" />
                        </span>
                    </div>
                    <div className={classes.field}>
                        <label>Email</label><br />
                        <Field type="text" name="email" placeholder="enter email" className={classes.item} />
                        <span className={classes.err}><br />
                            <ErrorMessage name='email' />
                        </span>
                    </div>
                    <div className={classes.field}>
                        <label>Password</label><br />
                        <Field type="password" name="password" placeholder="enter password" className={classes.item} />
                        <span className={classes.err}><br />
                            <ErrorMessage name='password' />
                        </span>
                    </div>


                    <div className={classes.field}>
                        <label>Gender</label><br />

                        <label>
                            <Field type="radio" name="gender" value="male" />
                            Male
                        </label><br/>
                        <label>
                            <Field type="radio" name="gender" value="female" />
                            Female
                        </label><br />

                        <span className={classes.err} ><br />
                            <ErrorMessage name="gender" />
                        </span>
                    </div>
                    <div className={classes.field}>
                        <label>country</label><br />
                        <Field name="selectedOption" as="select" className={classes.item}>
                           
                           <option value="" >Select a country</option>
                            <option value="option1">India</option>
                            <option value="option2"> America</option>
                            <option value="option3">Canada</option>
                          
                        </Field>
                        <span className={classes.err} >
                            <br />
                            <ErrorMessage name="selectedOption" />
                        </span>
                    </div>


                    <div className={classes.btn}>
                        <button type='submit' className={classes.button}>submit</button>
                    </div>

                </Form>
            </Formik>
        </div>;
    </>
}

export default Contact;
