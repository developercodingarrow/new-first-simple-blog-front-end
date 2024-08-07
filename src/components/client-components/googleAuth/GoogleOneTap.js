"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import { authenticate } from "@/src/Actions/authAction";
import axios from "axios";

export default function GoogleOneTap() {
  const router = useRouter();
  const logined = false;

  console.log("component run");

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      console.log("test onTap");
      if (credentialResponse) {
        console.log("enter");

        try {
          const res = axios({
            method: "post",
            url: "http://localhost:8000/api/v1/first-simple-blog/auth/google-login",
            data: {
              token: credentialResponse.credential,
            },
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(res);

          if (res.data.status === "success") {
            authenticate(res.data.user, res.data.token, () => {
              router.push("/test");
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <div>
      <p> one tap</p>
    </div>
  );
}
