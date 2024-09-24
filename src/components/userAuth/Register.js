"use client";
import React from "react";
import { userRegisterAction } from "@/src/app/utils/userAuthaction";
import { userRegistraionInputs } from "@/src/jsonData/authformData";
import UserAuthLayout from "./UserAuthLayout";

export default function Register() {
  return (
    <div>
      <UserAuthLayout
        formInputs={userRegistraionInputs}
        suHeading="Register Your Account"
        socialAuth="or sign up with"
        formBtn="Register"
        formType="SINGUP"
        formHandel={userRegisterAction}
        footerLink="login"
        footerText="Sing in"
      />
    </div>
  );
}
