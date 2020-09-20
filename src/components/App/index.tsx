import React from "react";
import "./App.css";
import { Formik, Form } from "formik";

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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}></Formik>
    </div>
  );
};

export default App;
