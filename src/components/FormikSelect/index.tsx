import React from "react";
import {
  InputLabel,
  FormControl,
  Select,
  FormHelperText,
  MenuItem,
} from "@material-ui/core";
import "./FormikSelect.css";

interface FormikSelectProps {}

const FormikSelect: React.FC<FormikSelectProps> = (props) => {
  return (
    <div className='FormikSelect'>
      <FormControl fullWidth>
        <InputLabel>Position</InputLabel>
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
