import React from "react";

import LandscapeCard from "@/src/components/server-components/cards/LandscapeCard";
import TestCard from "@/src/components/server-components/cards/TestCard";
import { tagfillterBlogs } from "./actionapi";

async function getData(tagquery, page = 1) {
  try {
    const res = await tagfillterBlogs(tagquery, page);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (!res.data || !res.data.result) {
      throw new Error("Data not found");
    }

    return await res.data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Failed to fetch data: ${error}`);
  }
}

export default async function Card(props) {
  const { tagquery, page } = props;

  const initialData = await getData(tagquery, page);
  return (
    <div>
      {initialData.map((el, index) => {
        return (
          <div>
            <TestCard data={el} />
          </div>
        );
      })}
    </div>
  );
}
