import React from "react";
import { TextField } from "@material-ui/core";

interface FormikFieldProps {
  label: string;
}

const FormikField: React.FC<FormikFieldProps> = ({ label }) => {
  return (
    <div className='formikField'>
      <TextField label={label} />
    </div>
  );
};

export default FormikField;
