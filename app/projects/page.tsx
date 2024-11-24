import type { Metadata } from "next";
import Header from "@/components/Header";
import ContentBox from "@/components/ContentBox/Default";
import data from "@/json/project.json";

export const metadata: Metadata = {
  title: "Recent Projects",
};

export default function Page() {
  return (
    <>
      <Header align="center" underline>
        Recent Projects
      </Header>
      <ContentBox data={data} includeDesc={true} />
    </>
  );
}
