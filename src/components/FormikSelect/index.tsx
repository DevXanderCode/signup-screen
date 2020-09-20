import React from "react";
import {
  InputLabel,
  FormControl,
  Select,
  FormHelperText,
  MenuItem,
} from "@material-ui/core";
import "./FormikSelect.css";

interface FormikSelectProps {
  label: string;
  name: string;
  options: Array;
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
