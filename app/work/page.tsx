import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Work",
};

export default function Page() {
  return (
    <>
      <Header title="Work"></Header>
      <p>This is where my "Work" would go i guess..</p>
    </>
  );
}
