"use client";
import React from "react";
import UserAuthLayout from "../UserAuthLayout/UserAuthLayout";
import { userLoginInputs } from "@/src/jsonData/authformData";
import { loginAccount } from "@/src/Actions/userActions/userAuthAction";

export default function Login() {
  return (
    <div>
      <UserAuthLayout
        formInputs={userLoginInputs}
        suHeading="Login Your Account"
        socialAuth="or sign in with"
        formBtn="Login"
        formType="LOGIN"
        formHandel={loginAccount}
        footerLink="user-registration"
      />
    </div>
  );
}