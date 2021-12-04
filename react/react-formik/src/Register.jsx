import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
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

  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    validationSchema,
    //validateOnChange: false,
    //validateOnBlur: false,
    onSubmit: (data) => console.log(JSON.stringify(data, null, 2)),
  });

  return (
    <div className="register-form">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            name="fullname"
            type="text"
            className={
              "form-control " +
              (formik.errors.fullname ? "is-invalid" : "is-valid")
            }
            onChange={formik.handleChange}
            value={formik.values.fullname}
          />
          <div className="text-danger">
            {formik.errors.fullname ? formik.errors.fullname : null}
          </div>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <div className="text-danger">
            {formik.errors.username ? formik.errors.username : null}
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div className="text-danger">
            {formik.errors.email ? formik.errors.email : null}
          </div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className="text-danger">
            {formik.errors.password ? formik.errors.password : null}
          </div>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <div className="text-danger">
            {formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null}
          </div>
        </div>
        <div className="form-group form-check">
          <input
            name="acceptTerms"
            type="checkbox"
            className="form-check-input"
            onChange={formik.handleChange}
            value={formik.values.acceptTerms}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="text-danger">
            {formik.errors.acceptTerms ? formik.errors.acceptTerms : null}
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            className="btn btn-warning ml-3 float-right"
            onClick={formik.handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
