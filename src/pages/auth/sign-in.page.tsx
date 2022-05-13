import React from "react";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";

import type { Page } from "next/app";
import AuthApi from "api/auth.api";
import DefaultLayout from "components/layouts/DefaultLayout";
import Input from "components/form/Input";
import Button from "components/common/Button";
import { ssrHandler } from "services/handler.service";

const initialValues: SignInPayload = {
  username: "Kalat",
  password: "azerty",
  rememberMe: "",
};

const getServerSideProps = ssrHandler(async (context) => {
  return { props: {} };
});

const SignInPage: Page = () => {
  const router = useRouter();

  const handleSubmit = async (values: SignInPayload) => {
    try {
      const response = await AuthApi.signIn(values);

      router.push(`/user/${values.username}`);
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
                <Input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Mot de passe</label>
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
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
