"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";

export default function GoogleAuthClient() {
  const router = useRouter();
  const logined = false;

  return (
    <div>
      {logined ? (
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

                  console.log(res);

                  if (res.data.status === "Success") {
                    console.log(res.data.user, res.data.token);
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
