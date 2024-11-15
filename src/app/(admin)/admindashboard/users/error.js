"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={"errorContainer"}>
      <div className={"contentWrapper"}>
        <h1 className={"heading"}>Oops! Something went wrong</h1>
        <p className={"subText"}>
          We're sorry for the inconvenience. Please try refreshing the page or
          contact support if the problem persists.
        </p>
        <button className={"retryButton"} onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
}
