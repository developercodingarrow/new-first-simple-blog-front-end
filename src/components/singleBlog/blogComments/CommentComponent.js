"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./css/commentcomponent.module.css";
import Image from "next/image";
import RepliesList from "./RepliesList";
import CommentReplyForm from "./CommentReplyForm";
import { MdDeleteForever } from "../../ApplicationIcons";
import { FaUserCircle } from "../../ApplicationIcons";
import SubmitBtn from "../../client-components/elements/buttons/SubmitBtn";
import {
  createCommentAction,
  deleteCommentAction,
  deleteCommentReplyAction,
} from "@/src/app/utils/commentactions";
import { AuthContext } from "@/src/app/_contextApi/authContext";
import { ModelsContext } from "@/src/app/_contextApi/ModelContextApi";

export default function CommentComponent(props) {
  const { blogComments, blogId, blogBy } = props;
  const router = useRouter();
  const { authUser } = useContext(AuthContext);
  const { handelOpenAuthModel } = useContext(ModelsContext);
  const userId = authUser?._id;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  // State to manage comments
  const [comments, setComments] = useState(blogComments);
  const [activeCommentId, setActiveCommentId] = useState(null);

  const handelCreateComment = async (data) => {
    try {
      const res = await createCommentAction(data);
      console.log(res);

      // res.data.newComment.commentBy.userImg.url
      setComments([
        ...comments,
        {
          id: res.newComment._id,
          comment: res.newComment.comment,
          commentBy: {
            name: res.newComment.commentBy.name, // Replace with the actual user's name
            userImg: {
              url: res.newComment.commentBy.userImg.url,
            },
          },
          replies: [],
        },
      ]);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleReplyAdded = (commentId, newReply) => {
    // Find the comment to update
    console.log("new reply obj---", newReply);
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, newReply] }
          : comment
      )
    );
    setActiveCommentId(null);
  };

  const deleteComment = async (data) => {
    try {
      console.log(data);
      const res = await deleteCommentAction(data); // Call the API function

      //

      if (res.status === "success") {
        console.log("sucess--", res);
        const updatedComments = comments.filter(
          (comment) => comment.id !== data.commentId
        );
        setComments(updatedComments);
      } else {
        // Handle cases where status is not "Success"
        console.error("Failed to delete comment", res.message);
      }
    } catch (error) {
      console.error("Failed to delete comment", error);

      // Optionally show a notification or undo option
      // Restore the comment if the delete fails
      setComments([...comments, { id: res.commentId }]); // Restore comment
    }
  };

  const deleteReply = async (commentId, replyId) => {
    try {
      const data = {
        commentId: commentId,
        replyId: replyId,
      };

      const res = await deleteCommentReplyAction(data);
      console.log(res);
      if (res.status === "Success") {
        // Optimistically remove the reply from the UI
        const updatedComments = comments.map((comment) => {
          if (comment.id === commentId) {
            return {
              ...comment,
              replies: comment.replies.filter((reply) => reply._id !== replyId),
            };
          }
          return comment;
        });
        setComments(updatedComments);
      }

      // Optionally handle server confirmation or errors
    } catch (error) {
      console.error("Failed to delete reply", error);

      // Revert UI state in case of error
      // Optionally show a notification or undo option
      // Restore the reply if needed
    }
  };

  return (
    <div className={styles.comment_section}>
      <div className={styles.comment_heading}>
        <h3>Comments</h3>
      </div>
      <div className={styles.comment_form_container}>
        {userId ? (
          <div className={styles.comment_form_wrapper}>
            <form
              onSubmit={handleSubmit(handelCreateComment)}
              className={styles.comment_form}
            >
              <input
                type="hidden"
                name="blog"
                value={blogId}
                className={styles.comment_input}
                {...register("blog")}
              />
              <input
                type="text"
                placeholder="Add a Cooment"
                name="comment"
                className={styles.comment_input}
                {...register("comment", { required: true })}
              />

              <SubmitBtn btnText="comment" disabled={!isValid} />
            </form>
          </div>
        ) : (
          <div className={styles.not_logined_Bar} onClick={handelOpenAuthModel}>
            <div className="small_text">Tell us what you think... </div>
          </div>
        )}
      </div>

      <div className={styles.comment_list}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment_item}>
            <div className={styles.comment_profile}>
              <div className={styles.profile_pic_wrapper}>
                {comment.commentBy?.userImg?.url ? (
                  <Image
                    src={`/usersProfileImg/${comment.commentBy?.userImg?.url}`}
                    alt={`${comment.commentBy?.userImg?.altText}'s profile picture`}
                    width={500}
                    height={500}
                    className={styles.profile_pic}
                  />
                ) : (
                  <div className={styles.No_profile_pic_wrapper}>
                    <FaUserCircle />
                  </div>
                )}
              </div>
              <div className={styles.comment_content}>
                <h5 className="capitalize_text">{comment.commentBy.name}</h5>

                <p className={styles.comment_text}>{comment.comment}</p>

                {userId === comment?.commentBy?._id && (
                  <div className={styles.delete_icon_wrapper}>
                    <MdDeleteForever
                      onClick={() => deleteComment({ commentId: comment.id })}
                      className={styles.delete_iconStyle}
                    />
                  </div>
                )}

                <div className={styles.reply_list_wrapper}>
                  {comment.replies.length > 0 && (
                    <div>
                      <RepliesList
                        replies={comment.replies}
                        comentID={comment.id}
                        handelDelete={deleteReply}
                      />
                    </div>
                  )}
                  <button
                    className={styles.reply_button}
                    onClick={() => setActiveCommentId(comment.id)}
                  >
                    Reply
                  </button>
                  {activeCommentId === comment.id && (
                    <CommentReplyForm
                      commentId={comment.id}
                      onReplyAdded={handleReplyAdded} // Pass the handler
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
