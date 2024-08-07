"use client";
import React from "react";
import UserAuthLayout from "../UserAuthLayout/UserAuthLayout";
import { userRegistraionInputs } from "@/src/jsonData/authformData";
import { userRegister } from "@/src/Actions/userActions/userAuthAction";

export default function Register() {
  return (
    <div>
      <UserAuthLayout
        formInputs={userRegistraionInputs}
        suHeading="Register Your Account"
        socialAuth="or sign up with"
        formBtn="Register"
        formType="SINGUP"
        formHandel={userRegister}
        footerLink="login"
      />
    </div>
  );
}
