"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./css/commentcomponent.module.css";

import SubmitBtn from "../../client-components/elements/buttons/SubmitBtn";
import { createReplyAction } from "@/src/app/utils/commentactions";

export default function CommentReplyForm({ commentId, onReplyAdded }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await createReplyAction(data);
      console.log("reply foem--", res);

      if (res.status === "Success") {
        const newTempReply = {
          comment: res.commentToUpdate.comment,
          replyBy: { name: res.commentToUpdate.commentBy.name }, // Replace with actual user's name
          createdAt: new Date().toISOString(), // Current timestamp
        };
        onReplyAdded(data.commentId, newTempReply);
        reset(); // Reset form fields after successful submission
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.reply_form}>
      <input
        type="hidden"
        name="commentId"
        value={commentId}
        {...register("commentId")}
      />
      <input
        type="text"
        name="comment"
        placeholder="Write a reply..."
        className={styles.reply_input}
        {...register("comment", { required: true })}
      />

      <SubmitBtn btnText="Reply" disabled={!isValid} />
    </form>
  );
}
