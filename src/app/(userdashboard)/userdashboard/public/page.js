import UserCard from "@/src/components/server-components/cards/user/UserCard";
import UserBlogsUI from "@/src/layouts/clients/user-protected/UserBlogsUI";
import React from "react";

export default function page() {
  return (
    <div>
      <UserBlogsUI />
    </div>
  );
}
