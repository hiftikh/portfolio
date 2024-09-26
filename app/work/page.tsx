import type { Metadata } from "next";
import Header from "@/components/Header";
import ContentBox from "@/components/ContentBox";

export const metadata: Metadata = {
  title: "Work",
};

import data from "@/json/work.json";

export default function Page() {
  return (
    <>
      <Header title="Recent Work" underline />
      <ContentBox data={data} />
    </>
  );
}
