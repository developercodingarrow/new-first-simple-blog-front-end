import React from "react";
import LikesAction from "../../client-components/likes/LikesAction";

export default function LikeActionWrapper(props) {
  const { postLikes, elementID } = props;
  return (
    <div>
      <LikesAction postLikes={postLikes} elementID={elementID} />
    </div>
  );
}
