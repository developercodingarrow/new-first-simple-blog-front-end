"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./css/commentcomponent.module.css";
import Image from "next/image";
import userImg from "../../../../public/web-static-img/auther-image.jpg"; // Replace with actual image path
import {
  createComment,
  createReplyAction,
  deleteCommentApi,
  deleteCommentReplyApi,
} from "@/src/Actions/commentActions/CommentActions";
import RepliesList from "./RepliesList";
import CommentReplyForm from "./CommentReplyForm";

export default function CommentComponent(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { blogComments, blogId } = props;
  // State to manage comments
  const [comments, setComments] = useState(blogComments);
  const [activeCommentId, setActiveCommentId] = useState(null);

  console.log("blogcokomment---", blogComments);

  // const handelCreateComment = async (data) => {
  //   try {
  //     const res = await createComment(data);
  //     console.log(res);

  //     // Add the new comment to the existing comments state
  //     setComments([
  //       ...comments,
  //       {
  //         id: res.data.newComment._id, // Assuming the API returns the new comment ID
  //         comment: data.comment,
  //         commentBy: {
  //           name: "Your Name", // Replace with the actual user's name
  //           profilePic: userImg, // Replace with actual user image path or data
  //         },
  //       },
  //     ]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleReplySubmit = async (data) => {
  //   try {
  //     const res = await createReplyAction(data);
  //     // Update the specific comment's replies in the state
  //     setComments((prevComments) =>
  //       prevComments.map((comment) =>
  //         comment.id === data.commentId
  //           ? { ...comment, replies: [...comment.replies, res.data.newReply] }
  //           : comment
  //       )
  //     );
  //     setActiveCommentId(null); // Reset active comment ID after submitting a reply
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handelCreateComment = async (data) => {
    try {
      const res = await createComment(data);
      console.log(res);

      setComments([
        ...comments,
        {
          id: res.data.newComment._id,
          comment: data.comment,
          commentBy: {
            name: "Your Name", // Replace with the actual user's name
            profilePic: userImg,
          },
          replies: [],
        },
      ]);
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
  };

  // const deleteComment = async (commentId) => {
  //   try {
  //     console.log(commentId);
  //     const res = await deleteCommentApi(commentId); // Assume this function calls the API
  //     console.log(res);
  //     if (res.data.status === "success") {
  //       const updatedComments = comments.filter(
  //         (comment) => comment.id !== commentId
  //       );
  //       setComments(updatedComments);
  //     }
  //   } catch (error) {
  //     console.error("Failed to delete comment", error);

  //     // Revert UI state in case of error
  //     // Optionally show a notification or undo option
  //     setComments([...comments, { id: commentId }]); // Restore comment
  //   }
  // };

  const deleteComment = async (data) => {
    try {
      console.log(data);
      const res = await deleteCommentApi(data); // Call the API function
      console.log(res);
      //

      if (res.data.status === "success") {
        const updatedComments = comments.filter(
          (comment) => comment.id !== data.commentId
        );
        setComments(updatedComments);
      } else {
        // Handle cases where status is not "Success"
        console.error("Failed to delete comment", res.data.message);
      }
    } catch (error) {
      console.error("Failed to delete comment", error);

      // Optionally show a notification or undo option
      // Restore the comment if the delete fails
      setComments([...comments, { id: data.commentId }]); // Restore comment
    }
  };

  const deleteReply = async (commentId, replyId) => {
    try {
      const data = {
        commentId: commentId,
        replyId: replyId,
      };

      const res = await deleteCommentReplyApi(data);
      if (res.data.status === "Success") {
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
      <h2>Comments</h2>
      <form onSubmit={handleSubmit(handelCreateComment)}>
        {/* Your existing form code */}
      </form>

      <div className={styles.comment_list}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment_item}>
            <div className={styles.comment_profile}>
              <div className={styles.profile_pic_wrapper}>
                <Image
                  src={userImg}
                  alt={`${comment.name}'s profile picture`}
                  width={50}
                  height={50}
                  className={styles.profile_pic}
                />
              </div>
              <div className={styles.comment_content}>
                <h4 className={styles.user_name}>{comment.commentBy.name}</h4>
                <p className={styles.user_comment}>{comment.comment}</p>
                <button
                  onClick={() => deleteComment({ commentId: comment.id })}
                >
                  Delete
                </button>
                <div>
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

  return (
    <div className={styles.comment_section}>
      <h2>Comments</h2>
      <form onSubmit={handleSubmit(handelCreateComment)}>
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

        <button className={styles.comment_button}> comment</button>
      </form>

      <div className={styles.comment_list}>
        {comments.map((comment) => (
          <div>
            <div key={comment.id} className={styles.comment_item}>
              <div className={styles.comment_profile}>
                <div className={styles.profile_pic_wrapper}>
                  <Image
                    src={userImg}
                    alt={`${comment.name}'s profile picture`}
                    width={50}
                    height={50}
                    className={styles.profile_pic}
                  />
                </div>
                <div className={styles.comment_content}>
                  <h4 className={styles.user_name}>{comment.commentBy.name}</h4>
                  <p className={styles.user_comment}>{comment.comment}</p>
                  <div>
                    {/* Always show the Reply button */}
                    {/* <button
                      className={styles.reply_button}
                      onClick={() =>
                        setActiveCommentId(
                          activeCommentId === comment.id ? null : comment.id
                        )
                      }
                    >
                      Reply
                    </button> */}

                    <button
                      className={styles.reply_button}
                      onClick={() => setActiveCommentId(comment.id)}
                    >
                      Reply
                    </button>

                    {/* Display CommentReplyForm if this comment is active */}
                    {activeCommentId === comment.id && (
                      <CommentReplyForm
                        commentId={comment.id}
                        onReplyAdded={handleReplyAdded}
                      />
                    )}

                    {/* Display replies if there are any */}
                    {comment.replies.length > 0 && (
                      <RepliesList replies={comment.replies} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
