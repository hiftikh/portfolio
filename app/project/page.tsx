import type { Metadata } from "next";
import Header from "@/components/Page/Header";
import ContentCard from "@/components/ContentCard/Default";
import data from "@/json/project.json";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Page() {
  return (
    <>
      <Header align="center" underline>
        Recent Projects
      </Header>
      <ContentCard data={data} includeDesc={true} pathname="project" />
    </>
  );
}
