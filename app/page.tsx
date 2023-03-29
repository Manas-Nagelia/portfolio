import { Inter } from "next/font/google";
import HomePage from "./HomePage";
import fs from "fs";
import { BlogResponse } from "./Blog";


async function getData() {
  const queryParams = new URLSearchParams({
    rss_url: "https://medium.com/feed/@manasnagelia",
  });

  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?" + queryParams,
    {
      next: { revalidate: 7200 },
    }
  );

  const json = res.json();

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(
      `Failed to fetch data. Status Code: ${res.status} ${res.statusText}`
    );
  }

  return json;
}

export default async function Page() {
  const data: BlogResponse = await getData();

  return (
    <>
      <HomePage items={data.items} />
    </>
  );
}
