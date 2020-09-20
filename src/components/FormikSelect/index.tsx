import React from "react";
import {
  InputLabel,
  FormControl,
  Select,
  FormHelperText,
  MenuItem,
} from "@material-ui/core";
import "./FormikSelect.css";

interface FormikSelectItems {
  label: string;
  value: string;
}

interface FormikSelectProps {
  label: string;
  name: string;
  options: FormikSelectItems[];
}

const FormikSelect: React.FC<FormikSelectProps> = ({
  label,
  name,
  options,
  ...props
}) => {
  return (
    <div className='FormikSelect'>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select>
          <MenuItem>Front End</MenuItem>
          <MenuItem>Back End</MenuItem>
          <MenuItem>Dev Ops</MenuItem>
          <MenuItem>QA</MenuItem>
        </Select>
        <FormHelperText>Required!</FormHelperText>
      </FormControl>
    </div>
  );
};

export default FormikSelect;
