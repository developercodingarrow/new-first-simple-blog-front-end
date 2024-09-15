"use client";
import React, { useContext } from "react";
import styles from "./css/profileElementWrapper.module.css";
import InputModel from "@/src/components/client-components/models/InputModel";
import UserImgModel from "@/src/components/client-components/models/imgModel/UserImgModel";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import { UserContext } from "@/src/app/_contextApi/UserContextApi";
import {
  userNameinput,
  nameinput,
  facbookinput,
  twitterinput,
  instagraminput,
} from "@/src/jsonData/userDashbordData";
import UserImagDetail from "./pageElements/userImageDetail/UserImagDetail";
import UserTextDetail from "./pageElements/userTextDetail/UserTextDetail";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
export default function ProfileElementWrapper() {
  const { authUser, setauthUser, handelUpdateUserProfile } =
    useContext(AuthContext);

  const {
    handelOpenInputModel,
    modelInputData,
    id,
    actionHandler,
    isOpenInputModel,
    modelHeading,
    handelOpenUserImgModel,
    userImgModel,
  } = useContext(ModelsContext);

  return (
    <div className={styles.conatiner}>
      {isOpenInputModel && (
        <InputModel
          modelTitle={modelHeading}
          modelInput={modelInputData}
          actionID={id}
          modelActionHandler={actionHandler}
          apiData={authUser}
          setupdateData={setauthUser}
        />
      )}
      {userImgModel && (
        <UserImgModel
          updateFor="userImg"
          setupdateData={setauthUser}
          filePath="usersProfileImg"
        />
      )}

      <section className={styles.profile_section}>
        <div className={styles.section_heading}>
          <h4>User Profile</h4>
        </div>
        <div>
          <UserImagDetail
            title="Profile Image 2"
            apiData={authUser}
            openModal={handelOpenUserImgModel}
          />
        </div>
        <div>
          <UserTextDetail
            title="Name"
            textdata={authUser?.name}
            apiData={authUser}
            modelInputs={nameinput}
            modelTitle="Update You Name"
            openModal={handelOpenInputModel}
            modelActionHandler={handelUpdateUserProfile}
          />
        </div>

        <div>
          <UserTextDetail
            title="user Name"
            textdata={authUser?.userName}
            apiData={authUser}
            modelTitle="Update @username"
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
            textdata={authUser?.facebook}
            apiData={authUser}
            modelTitle="Update Facbook page"
            modelInputs={facbookinput}
            openModal={handelOpenInputModel}
            modelActionHandler={handelUpdateUserProfile}
          />
        </div>

        <div>
          <UserTextDetail
            title="twitter"
            textdata={authUser?.twitter}
            apiData={authUser}
            modelTitle="Update Twitter page"
            modelInputs={twitterinput}
            openModal={handelOpenInputModel}
            modelActionHandler={handelUpdateUserProfile}
          />
        </div>

        <div>
          <UserTextDetail
            title="instagram"
            textdata={authUser?.instagram}
            apiData={authUser}
            modelTitle="Update Instrgram page"
            modelInputs={instagraminput}
            openModal={handelOpenInputModel}
            modelActionHandler={handelUpdateUserProfile}
          />
        </div>
      </section>
    </div>
  );
}
