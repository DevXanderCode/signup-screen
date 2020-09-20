import React, { ReactNode } from "react";
import {
  InputLabel,
  FormControl,
  Select,
  FormHelperText,
  MenuItem,
} from "@material-ui/core";
import "./FormikSelect.css";

export interface FormikSelectItem {
  label: string;
  value: string;
}

interface FormikSelectProps {
  label: string;
  name: string;
  items: FormikSelectItem[];
}

interface MaterialUISelectFieldProps {
  children: ReactNode;
  label: string;
}

const MaterialUISelectField: React.FC<MaterialUISelectFieldProps> = ({
  label,
  children,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select>{children}</Select>
      <FormHelperText>Required!</FormHelperText>
    </FormControl>
  );
};

const FormikSelect: React.FC<FormikSelectProps> = ({
  label,
  name,
  items,
  ...props
}) => {
  return (
    <div className='FormikSelect'>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select>
          {items.map(({ label, value }, i) => (
            <MenuItem key={i} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Required!</FormHelperText>
      </FormControl>
    </div>
  );
};

export default FormikSelect;
