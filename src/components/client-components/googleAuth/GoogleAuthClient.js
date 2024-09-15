"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
import { authenticate } from "@/src/Actions/authAction";

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
                  const res = await axios({
                    method: "post",
                    url: "http://localhost:8000/api/v1/first-simple-blog/auth/google-login",
                    data: {
                      token: credentialResponse.credential,
                    },
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });

                  if (res.data.status === "success") {
                    console.log(res.data.user, res.data.token);
                    authenticate(res.data.user, res.data.token, () => {
                      router.push("/");
                    });
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
