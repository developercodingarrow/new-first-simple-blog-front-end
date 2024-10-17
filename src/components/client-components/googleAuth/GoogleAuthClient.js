"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import { userGoogleLoginAction } from "@/src/app/utils/userAuthaction";

export default function GoogleAuthClient(props) {
  const { userAuthData } = props;
  const router = useRouter();

  return (
    <div>
      {userAuthData ? (
        <p> Usewr Logined</p>
      ) : (
        <>
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
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
            }}
            onError={() => {}}
            useOneTap
          />
        </>
      )}
    </div>
  );
}
