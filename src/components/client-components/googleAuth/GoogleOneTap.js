"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { userGoogleLoginAction } from "@/src/app/utils/userAuthaction";

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

          if (res.status === "success") {
            console.log(res.user, res.token);
            router.push("/");
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
