import React from "react";
import { ErrorMessage, Field } from "formik";
import { TextField } from "@material-ui/core";
import "./FormikField.css";

interface FormikFieldProps {
  name: string;
  label: string;
}

const FormikField: React.FC<FormikFieldProps> = ({ name, label, ...props }) => {
  return (
    <div className='formikField'>
      <Field
        name={name}
        as={TextField}
        autoComplete='off'
        label={label}
        fullWidth
        helperText={<ErrorMessage name={name} />}
      />
      {/* <TextField autoComplete='off' label={label} fullWidth /> */}
    </div>
  );
};

export default FormikField;
