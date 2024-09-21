"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
import { authenticate } from "@/src/Actions/authAction";
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
              console.log(credentialResponse);
              if (credentialResponse) {
                console.log("enter");

                try {
                  const res = await userGoogleLoginAction(
                    credentialResponse.credential
                  );
                  console.log("googleAuthClient", res);

                  if (res.status === "success") {
                    console.log(res.user, res.token);
                  }
                } catch (error) {
                  console.log(error);
                }
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </>
      )}
    </div>
  );
}
