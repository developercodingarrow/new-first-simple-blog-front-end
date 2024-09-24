"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";

export default function GoogleOneTap() {
  const router = useRouter();

  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      console.log("test onTap");
      if (credentialResponse) {
        console.log("enter");

        try {
          const res = await userGoogleLoginAction(
            credentialResponse.credential
          );

          console.log(res);

          if (res.status === "success") {
            console.log(res.user, res.token);
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
