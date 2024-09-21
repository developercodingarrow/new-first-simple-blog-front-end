"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from "./css/commentcomponent.module.css";
import userImg from "../../../../public/web-static-img/auther-image.jpg";
import { MdDeleteForever } from "../../ApplicationIcons";
import { AppContext } from "@/src/contextApi/AppcontextApi";
export default function RepliesList(props) {
  const { isLogined } = useContext(AppContext);
  const userID = isLogined?._id;
  const { replies, comentID, handelDelete } = props;
  console.log(replies);

  return (
    <div className={styles.replies_list}>
      {replies.map((reply) => (
        <div key={reply.id} className={styles.reply_item}>
          <div className={styles.comment_profile}>
            <div className={styles.profile_pic_wrapper}>
              <Image
                src={userImg}
                alt="profile picture"
                width={40}
                height={40}
                className={styles.profile_pic}
              />
            </div>
            <div className={styles.comment_content}>
              <h6 className={"capitalize_text"}>
                {reply.replyBy?.name || "Anonymous"}
              </h6>
              <p className={styles.comment_text}>{reply.comment}</p>

              {userID === reply?.replyBy?._id && (
                <div className={styles.delete_icon_wrapper}>
                  <MdDeleteForever
                    onClick={() => handelDelete(comentID, reply._id)}
                    className={styles.delete_iconStyle}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
