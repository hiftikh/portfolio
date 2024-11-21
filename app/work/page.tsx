import type { Metadata } from "next";
import Header from "@/components/Header";
import data from "@/json/work.json";
import ContentBox from "@/components/ContentBox/Default";

export const metadata: Metadata = {
  title: "Work",
};

// import KeywordFilter from "@/components/KeywordFilter";

export default function Page() {
  return (
    <>
      <Header align="center" underline>
        Recent Work
      </Header>

      {/* {data && <KeywordFilter data={data} />} */}

      <ContentBox data={data} type="work" />
    </>
  );
}
