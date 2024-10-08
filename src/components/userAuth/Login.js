"use client";
import React from "react";

import { userLoginAction } from "@/src/app/utils/userAuthaction";
import { userLoginInputs } from "@/src/jsonData/authformData";
import UserAuthLayout from "./UserAuthLayout";

export default function Login(props) {
  const { userData } = props;
  return (
    <div>
      <UserAuthLayout
        formInputs={userLoginInputs}
        suHeading="Login Your Account"
        socialAuth="or sign in with"
        formBtn="Login"
        formType="LOGIN"
        formHandel={userLoginAction}
        footerLink="user-registration"
        footerText="Sing Up"
        userAuthData={userData}
      />
    </div>
  );
}
