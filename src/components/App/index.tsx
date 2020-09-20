import React from "react";
import "./App.css";
import { Formik, Form } from "Formik";

interface formValues {
  name: string;
  position: string;
}

const initialValues: formValues = {
  name: "",
  position: "",
};

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1>Sign Up</h1>
      <Formik initialValues={initialValues}></Formik>
    </div>
  );
};

export default App;
