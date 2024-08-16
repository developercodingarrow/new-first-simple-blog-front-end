import UserCard from "@/src/components/server-components/cards/user/UserCard";
import React from "react";

export default function page() {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((data, index) => {
        return <UserCard key={index} />;
      })}
    </div>
  );
}
