import React from "react";
import { useField } from "formik";

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div className="form-group form-check">
      <input
        type="checkbox"
        className="form-check-input"
        {...field}
        {...props}
      />
      <label className="form-check-label" htmlFor={props.id || props.name}>
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};
export default Checkbox;
