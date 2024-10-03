import React from "react";
import { tagfillterBlogs } from "./actionapi";
import MainCard from "@/src/components/homepage/card/MainCard";

async function getData(tagquery, page = 1) {
  try {
    const res = await tagfillterBlogs(tagquery, page);
    if (!res.data || !res.data.result) {
      throw new Error("Data not found");
    }

    return await res.data.result;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`);
  }
}

export default async function Card(props) {
  const { tagquery, page } = props;

  const initialData = await getData(tagquery, page);
  return (
    <div>
      {initialData.length === 0 ? (
        <div>There is no content</div>
      ) : (
        <div>
          {initialData.map((el, index) => {
            return (
              <div>
                <MainCard data={el} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
