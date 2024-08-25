"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./css/commentcomponent.module.css";
import {
  createComment,
  createReplyAction,
} from "@/src/Actions/commentActions/CommentActions";
import SubmitBtn from "../elements/buttons/SubmitBtn";
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
      console.log(res);

      if (res.data.status === "Success") {
        // setnewReply(data.comment);

        const newTempReply = {
          comment: data.comment,
          replyBy: { name: "Your Name" }, // Replace with actual user's name
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
