import type { Metadata } from "next";
import Header from "@/components/Header";
import data from "@/json/work.json";
import ContentBox from "@/components/ContentContainer/Default";

export const metadata: Metadata = {
  title: "Recent Work",
};

// import KeywordFilter from "@/components/KeywordFilter";

export default function Page() {
  return (
    <>
      <Header align="center" underline>
        Recent Work
      </Header>
      {/* {data && <KeywordFilter data={data} />} */}
      <ContentBox data={data} />
    </>
  );
}
