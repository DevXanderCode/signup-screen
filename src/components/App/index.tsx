import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./App.css";
import FormikField from "../FormikField";
import FormikSelect, { FormikSelectItem } from "../FormikSelect";
import { Button } from "@material-ui/core";

interface FormValues {
  name: string;
  position: string;
  password: string;
}

const initialValues: FormValues = {
  name: "",
  password: "",
  position: "",
};

const positionItems: FormikSelectItem[] = [
  { label: "Front End", value: "front_end" },
  { label: "Back End", value: "back_end" },
  { label: "Dev Ops", value: "dev_ops" },
  { label: "QA", value: "qa" },
];

const App: React.FC = () => {
  const handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
  };

  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Required").min(2, "Name is Too Short!"),
    position: Yup.string().required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "password must have a minuimum of 8 characters"),
  });

  return (
    <div className='App'>
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signupSchema}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <FormikField name='name' label='Name' required />
            <FormikField
              name='password'
              label='Password'
              required
              type='password'
            />
            <FormikSelect
              label='Position'
              name='position'
              items={positionItems}
              required
            />
            <Button
              disabled={!dirty || !isValid}
              type='submit'
              color='primary'
              variant='contained'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
