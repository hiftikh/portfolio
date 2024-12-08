import type { Metadata } from "next";
import Header from "@/components/Page/Header";
import data from "@/json/work.json";
import ContentCard from "@/components/ContentCard/Default";

export const metadata: Metadata = {
  title: "Work",
};

export default function Page() {
  return (
    <>
      <Header align="center" underline>
        Recent Work
      </Header>
      <ContentCard data={data} pathname="work" />
    </>
  );
}
