import React from "react";
import { Formik, Form, Field } from "formik";

declare type loginValues = {
  email: string;
  password: string;
};

const LoginForm: React.FunctionComponent = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values: loginValues) => console.log("Values", values)}
    >
      <Form>
        <div className="">
          <div className="flex flex-col my-5">
            <label className="px-2 text-xl font-semibold">
              Email <em>*</em>
            </label>
            <Field
              className="border-4 border-gray-400 hover:border-blue-600 rounded-lg bg-gray-50 px-4 py-2 text-xl transition"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col my-5">
            <label className="px-2 text-xl font-semibold">
              Password <em>*</em>
            </label>
            <Field
              className="border-4 border-gray-400 hover:border-blue-600 rounded-lg bg-gray-50 px-4 py-2 text-xl transition"
              type="password"
              name="password"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-700 text-white text-xl px-10 py-2 rounded shadow hover:shadow-xl cursor-pointer transition transform duration-100 hover:scale-105"
          >
            Connexion
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
