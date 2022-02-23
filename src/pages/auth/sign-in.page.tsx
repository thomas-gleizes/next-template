import type { Page } from "next/app";
import React from "react";
import { Form, Formik } from "formik";

import AuthApi from "api/auth.api";
import DefaultLayout from "components/layouts/DefaultLayout";
import Input from "components/form/Input";
import Button from "components/common/Button";

const initialValues: SignInPayload = {
  password: "",
  rememberMe: "",
  username: "",
};

const SignInPage: Page = () => {
  const handleSubmit = async (values: SignInPayload) => {
    try {
      const response = await AuthApi.signIn(values);
    } catch (e) {}
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-gray-50">
      <div className="max-w-md w-full bg-white border rounded shadow-lg p-6">
        <div className="text-center text-2xl font-bold">
          <h2>Connexion</h2>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form className="flex flex-col space-y-2">
              <div>
                <label>Username</label>
                <Input name="username" value={values.username} onChange={handleChange} />
              </div>
              <div>
                <label>Mot de passe</label>
                <Input name="password" value={values.password} onChange={handleChange} />
              </div>
              <div>
                <Button type="submit">Connexion</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

SignInPage.layout = DefaultLayout;

export default SignInPage;
