import React from "react";
import "./App.css";
import { Formik, Form, Field } from "formik";

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

  return (
    <div className='App'>
      <h1>Sign Up</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <div>
              <label>Name: </label>
              <Field name={"name"} type='input' />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
