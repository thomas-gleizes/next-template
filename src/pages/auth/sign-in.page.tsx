import React from "react";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";

import type { Page } from "next/app";
import AuthApi from "api/auth.api";
import DefaultLayout from "components/layouts/DefaultLayout";
import Input from "components/form/Input";
import Button from "components/common/Button";
import { ssrHandler } from "services/handler.service";
import apiService from "services/api.service";
import ApiService from "services/api.service";

const initialValues: SignInPayload = {
  username: "Kalat",
  password: "azerty",
  rememberMe: "",
};

export const getServerSideProps = ssrHandler(async (context) => {
  console.log(context.req.cookies);

  return { props: {} };
});

const SignInPage: Page = () => {
  const router = useRouter();

  const handleSubmit = async (values: SignInPayload) => {
    try {
      const response = await AuthApi.signIn(values);

      // router.push(`/user/${values.username}`);

      console.log(document.cookie);
    } catch (e) {}
  };

  const handleRefesh = async () => {
    const response = await apiService.get("/auth/me");

    console.log(response);
  };

  const handleLogout = async () => {
    const response = await ApiService.post("/auth/logout");
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
              <div className="pt-4">
                <Button type="submit">Connexion</Button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="my-10 space-y-4">
          <Button type="button" color="green" onClick={handleRefesh}>
            Show ME
          </Button>
          <Button type="button" color="red" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

SignInPage.layout = DefaultLayout;

export default SignInPage;
