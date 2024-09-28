import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
};

export default function Page() {
  return (
    <>
      <Header align="center" underline>
        Recent Projects
      </Header>
    </>
  );
}
