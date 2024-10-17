"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { userGoogleLoginAction } from "@/src/app/utils/userAuthaction";

export default function GoogleOneTap() {
  const router = useRouter();

  useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      if (credentialResponse) {
        try {
          const res = await userGoogleLoginAction(
            credentialResponse.credential
          );

          if (res.status === "success") {
            router.push("/");
          }
        } catch (error) {}
      }
    },
    onError: () => {},
  });

  return (
    <div>
      <p> one tap</p>
    </div>
  );
}
