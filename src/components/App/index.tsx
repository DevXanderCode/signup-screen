import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";
import FormikField from "../FormikField";

interface FormValues {
  name: string;
  position: string;
}

const initialValues: FormValues = {
  name: "",
  position: "",
};

const App: React.FC = () => {
  const handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));
  };

  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Required").min(2, "Name is Too Short!"),
    position: Yup.string().required("Required"),
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
            <div>
              <label>Name: </label>
              <Field name={"name"} as='input' autoComplete='off' />
              <ErrorMessage name='name' />
            </div>
            <FormikField />
            <div>
              <label>Position: </label>
              <Field
                name='position'
                as='select'
                autoComplete='off'
                placeholder='Choose Your Position'
              >
                <option value=''></option>
                <option value='front-end'>Front End</option>
                <option value='back-end'>Back End</option>
                <option value='dev-ops'>Dev Ops</option>
                <option value='qa'>QA</option>
              </Field>
              <ErrorMessage name='position' />
            </div>
            <button disabled={!dirty || !isValid} type='submit'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
