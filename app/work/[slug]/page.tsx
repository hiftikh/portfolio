import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { GenerateMetadata } from "@/app/interfaces/GenerateMetadata";

import data from "@/json/work.json";

import Header from "@/components/Page/Header";
import Button from "@/components/Button";
import BreadCrumbCustom from "@/components/Page/BreadCrumbCustom";
import About from "@/components/SlugPage/About";
import Keyword from "@/components/Keyword";
import ScrollProgress from "@/components/Animatation/Scroll/ScrollProgress";

export async function generateMetadata({
  params,
}: GenerateMetadata): Promise<Metadata> {
  const { slug } = await params;
  const work = data.find((item) => item.url.slug.toString() === slug);
  return {
    title: `${work?.name} | Work`,
  };
}

export function generateStaticParams() {
  return data.map((item) => ({
    slug: item.url.slug,
  }));
}

export default async function Page({ params }: any) {
  const { slug } = await params;
  const work = data.find((item) => item.url.slug.toString() === slug);

  if (!work) {
    notFound();
  }

  const DetailedContent = dynamic(
    () =>
      import(`@/components/DetailedContent/${work.componentName}`).catch(
        (err) => {
          return () => "";
        }
      ),
    {
      ssr: true,
    }
  );

  const breadCrumbObj = {
    currentPage: work.name,
    currentSubPageURL: "/work",
    currentSubPageName: "Work",
  };

  return (
    <>
      <BreadCrumbCustom {...breadCrumbObj} />
      <Header underline>{work.name}</Header>
      <About {...work} />
      {work.url.site && (
        <>
          <Button
            href={work.url.site}
            text="Vist Website"
            icon="external-link"
            external
            variant="secondary"
          />
          <br />
          <br />
        </>
      )}
      <DetailedContent></DetailedContent>
      <Keyword {...work} />
      <ScrollProgress />
    </>
  );
}
