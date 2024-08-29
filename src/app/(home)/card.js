import React from "react";
import { tagfillterBlogs } from "@/src/_action/blog/blogActions";
import LandscapeCard from "@/src/components/server-components/cards/LandscapeCard";
import TestCard from "@/src/components/server-components/cards/TestCard";

async function getData(tagquery, page = 1) {
  try {
    const res = await tagfillterBlogs(tagquery, page);
    console.log(res);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (!res.data || !res.data.result) {
      throw new Error("Data not found");
    }

    return await res.data.result;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw new Error(`Failed to fetch data: ${error.message}`);
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
