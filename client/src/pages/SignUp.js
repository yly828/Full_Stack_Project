import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function SignUp() {
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "The minium length is 3 characters")
      .max(15, "The maxium length is 15 characters")
      .required("You have to give a username!"),
    password: Yup.string().min(6).max(20).required(),
  });

  const onSubmit = (data) => {
    //Copy the url from the Insomia "RegisterUser" http://localhost:3001/auth
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. John...)"
          />
          <ErrorMessage name="username" component="span" />

          <label>Password: </label>
          <Field
            id="inputCreatePost"
            type="password"
            name="password"
            placeholder="@12345678"
          />
          <ErrorMessage name="password" component="span" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUp;
