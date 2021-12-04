import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputText from "./InputText";
import Checkbox from "./Checkbox";

const RegisterWithControls = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept terms is required"),
  });

  const initialValues = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };

  return (
    <div className="register-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <InputText label="Full Name" name="fullname" type="text" />
          <InputText label="Username" name="username" type="text" />
          <InputText label="Email" name="email" type="text" />
          <InputText label="Password" name="password" type="password" />
          <InputText
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />
          <Checkbox
            children="I have read and agree to the Terms"
            name="acceptTerms"
          />
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterWithControls;
