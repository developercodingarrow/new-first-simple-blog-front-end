"use client";
import React, { useContext } from "react";
import dynamic from "next/dynamic";
import styles from "./css/profileElementWrapper.module.css";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import {
  userNameinput,
  nameinput,
  bioinput,
  webisteinput,
  facbookinput,
  twitterinput,
  instagraminput,
} from "@/src/jsonData/userDashbordData";
import UserImagDetail from "./pageElements/userImageDetail/UserImagDetail";
import UserTextDetail from "./pageElements/userTextDetail/UserTextDetail";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";
import SocialMediaDetail from "./pageElements/socialmediadetail/SocialMediaDetail";
const InputModel = dynamic(
  () => import("@/src/components/client-components/models/InputModel"),
  {
    ssr: false,
  }
);
const UserImgModel = dynamic(
  () =>
    import("@/src/components/client-components/models/imgModel/UserImgModel"),
  {
    ssr: false,
  }
);
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
            title="Profile Image "
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
            container_style="row_flex_container"
            text_wrapper_style="text_data_wrapper"
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
            container_style="row_flex_container"
            text_wrapper_style="text_data_wrapper"
          />
        </div>
      </section>
      <section className={styles.profile_section}>
        <div>
          <UserTextDetail
            title="Website"
            textdata={authUser?.businessWebsite}
            apiData={authUser}
            modelTitle="Update About Content"
            modelInputs={webisteinput}
            openModal={handelOpenInputModel}
            modelActionHandler={handelUpdateUserProfile}
            container_style="row_flex_container"
            text_wrapper_style="text_data_wrapper"
          />
        </div>
      </section>
      <section className={styles.profile_section}>
        <div>
          <UserTextDetail
            title="Bio"
            textdata={authUser?.bio}
            apiData={authUser}
            modelTitle="Update About Content"
            modelInputs={bioinput}
            openModal={handelOpenInputModel}
            modelActionHandler={handelUpdateUserProfile}
            container_style="column_flex_container"
            text_wrapper_style="text_content_wrapper"
          />
        </div>
      </section>

      <section className={styles.profile_section}>
        <div className={styles.section_heading}>
          <h4>Social Media Accounts</h4>
        </div>
        <div>
          <SocialMediaDetail
            title="facebook"
            textdata={authUser?.facebook}
            apiData={authUser}
            modelTitle="Update Facbook page"
            modelInputs={facbookinput}
            openModal={handelOpenInputModel}
            modelActionHandler={handelUpdateUserProfile}
            container_style="row_flex_container"
            text_wrapper_style="text_data_wrapper"
          />
        </div>

        <div>
          <SocialMediaDetail
            title="twitter"
            textdata={authUser?.twitter}
            apiData={authUser}
            modelTitle="Update Twitter page"
            modelInputs={twitterinput}
            openModal={handelOpenInputModel}
            modelActionHandler={handelUpdateUserProfile}
            container_style="row_flex_container"
            text_wrapper_style="text_data_wrapper"
          />
        </div>

        <div>
          <SocialMediaDetail
            title="instagram"
            textdata={authUser?.instagram}
            apiData={authUser}
            modelTitle="Update Instrgram page"
            modelInputs={instagraminput}
            openModal={handelOpenInputModel}
            modelActionHandler={handelUpdateUserProfile}
            container_style="row_flex_container"
            text_wrapper_style="text_data_wrapper"
          />
        </div>
      </section>
    </div>
  );
}
