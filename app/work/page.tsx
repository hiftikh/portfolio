import type { Metadata } from "next";
import Header from "@/components/Header";
import ContentBox from "@/components/ContentBox";

export const metadata: Metadata = {
  title: "Work",
};

import data from "../../json/work.json";

export default function Page() {
  return (
    <>
      <Header title="Work"></Header>
      <p>This is where my Work would go i guess..</p>
      <ContentBox data={data} />
    </>
  );
}
