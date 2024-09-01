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
import UserImgModel from "@/src/components/client-components/models/imgModel/UserImgModel";
import { UserContext } from "@/src/_contextApi/UserContextApi";

export default function UserDetailWrapper() {
  const { isLogined, userImgModel, handelOpenImgModel } =
    useContext(AppContext);

  const {
    handelUpdateUserProfile,
    isOpenInputModel,
    handelOpenInputModel,
    editModelData,
    modelInputData,
    handelcloseInputModal,
    id,
  } = useContext(UserContext);

  return (
    <div className={styles.conatiner}>
      {isOpenInputModel && (
        <InputModel
          modelData={editModelData}
          inputfileds={modelInputData}
          heding={`Update Profile}`}
          closeModal={handelcloseInputModal}
          id={id}
        />
      )}

      {userImgModel && <UserImgModel id={isLogined._id} />}

      <section className={styles.profile_section}>
        <div className={styles.section_heading}>
          <h4>User Profile</h4>
        </div>
        <div>
          <UserTextDetail
            title="Profile Image"
            imgData={userImg}
            type="img"
            apiData={isLogined}
            openModal={handelOpenImgModel}
          />
        </div>
        <div>
          <UserTextDetail
            title="Name"
            textdata={isLogined?.name}
            id={isLogined?._id}
            apiData={isLogined}
            type="text"
            modelInputs={nameinput}
            openModal={handelOpenInputModel}
            modelActionHandler={handelUpdateUserProfile}
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
            modelActionHandler={handelUpdateUserProfile}
          />
        </div>
      </section>

      <section className={styles.profile_section}>
        <div className={styles.section_heading}>
          <h4>Social Media Accounts</h4>
        </div>
        <div>
          <UserTextDetail
            title="Facbook"
            textdata={isLogined?.facebook}
            apiData={isLogined}
            type="text"
            modelInputs={facbookinput}
            openModal={handelOpenInputModel}
            modelActionHandler={handelUpdateUserProfile}
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
            modelActionHandler={handelUpdateUserProfile}
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
            modelActionHandler={handelUpdateUserProfile}
          />
        </div>
      </section>
    </div>
  );
}
