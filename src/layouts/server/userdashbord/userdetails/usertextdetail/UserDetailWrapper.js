"use client";
import React, { useContext, useState } from "react";
import userImg from "../../../../../../public/web-static-img/auther-image.jpg";
import Image from "next/image";
import styles from "./css/userDetailwrapper.module.css";
import UserTextDetail from "./UserTextDetail";
import {
  userApiData,
  userNameinput,
  nameinput,
  emaiinput,
  facbookinput,
  twitterinput,
  instagraminput,
} from "@/src/jsonData/userDashbordData";
import { AppContext } from "@/src/contextApi/AppcontextApi";
import InputModel from "@/src/components/client-components/models/InputModel";
import { userProfileUpdate } from "@/src/Actions/userActions/userAction";

export default function UserDetailWrapper() {
  const {
    isOpenInputModel,
    editModelData,
    modelInputData,
    handelOpenInputModel,
    handelcloseInputModal,
    isLogined,
  } = useContext(AppContext);
  return (
    <div className={styles.conatiner}>
      {isOpenInputModel && (
        <InputModel
          modelData={editModelData}
          inputfileds={modelInputData}
          heding={`Update Profile}`}
          closeModal={handelcloseInputModal}
        />
      )}
      <section className={styles.profile_section}>
        <div className={styles.section_heading}>
          <h2>User Profile</h2>
        </div>
        <div>
          <UserTextDetail title="Profile Image" imgData={userImg} type="img" />
        </div>
        <div>
          <UserTextDetail
            title="Name"
            textdata={isLogined?.name}
            apiData={isLogined}
            type="text"
            modelInputs={nameinput}
            openModal={handelOpenInputModel}
            modelActionHandler={userProfileUpdate}
          />
        </div>

        <div>
          <UserTextDetail
            title="user Name"
            textdata={isLogined?.userName}
            type="text"
            apiData={isLogined}
            modelInputs={userNameinput}
            openModal={handelOpenInputModel}
            modelActionHandler={userProfileUpdate}
          />
        </div>

        <div>
          <UserTextDetail
            title="Email"
            type="text"
            textdata={isLogined?.email}
            apiData={userApiData}
            modelInputs={emaiinput}
            openModal={handelOpenInputModel}
            modelActionHandler={userProfileUpdate}
          />
        </div>
      </section>

      <section className={styles.profile_section}>
        <div className={styles.section_heading}>
          <h2>Social Media Accounts</h2>
        </div>
        <div>
          <UserTextDetail
            title="Facbook"
            textdata={isLogined?.facebook}
            apiData={isLogined}
            type="text"
            modelInputs={facbookinput}
            openModal={handelOpenInputModel}
            modelActionHandler={userProfileUpdate}
          />
        </div>

        <div>
          <UserTextDetail
            title="twitter"
            textdata={isLogined?.twitter}
            apiData={isLogined}
            type="text"
            modelInputs={twitterinput}
            openModal={handelOpenInputModel}
            modelActionHandler={userProfileUpdate}
          />
        </div>

        <div>
          <UserTextDetail
            title="instagram"
            textdata={isLogined?.instagram}
            apiData={isLogined}
            type="text"
            modelInputs={instagraminput}
            openModal={handelOpenInputModel}
            modelActionHandler={userProfileUpdate}
          />
        </div>
      </section>
    </div>
  );
}
