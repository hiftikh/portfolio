import Header from "@/components/Header";
import type { Metadata } from "next";
import ContentBox from "@/components/ContentBox/Default";
import data from "@/json/project.json";

export const metadata: Metadata = {
  title: "Project",
};

export default function Page() {
  return (
    <>
      <Header align="center" underline>
        Recent Projects
      </Header>
      <ContentBox data={data} includeDesc={true} type="project" />
    </>
  );
}
