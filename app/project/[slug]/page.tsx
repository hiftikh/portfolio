import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { GenerateMetadata } from "@/app/interfaces/GenerateMetadata";

import data from "@/json/project.json";

import Header from "@/components/Page/Header";
import Button from "@/components/Button";
import BreadCrumbCustom from "@/components/Page/BreadCrumbCustom";
import About from "@/components/SlugPage/About";
import Keyword from "@/components/Keyword";

export async function generateMetadata({
  params,
}: GenerateMetadata): Promise<Metadata> {
  const { slug } = await params;
  const project = data.find((item) => item.url.slug.toString() === slug);
  return {
    title: `${project?.name} | Projects`,
  };
}

// export function generateStaticParams() {
//   return data.map((item) => ({
//     slug: item.url.slug,
//   }));
// }

export default async function Page({ params }: any) {
  const { slug } = await params;
  const project = data.find((item) => item.url.slug.toString() === slug);

  if (!project) {
    notFound();
  }

  // const DetailedContent = dynamic(
  //   () =>
  //     import(`@/components/DetailedContent/${project.componentName}`).catch(
  //       (err) => {
  //         return () => "";
  //       }
  //     ),
  //   {
  //     ssr: true,
  //   }
  // );

  const breadCrumbObj = {
    currentPage: project.name,
    currentSubPageURL: "/project",
    currentSubPageName: "Project",
  };

  return (
    <>
      <BreadCrumbCustom {...breadCrumbObj} />
      <Header underline>{project.name}</Header>
      <About {...project} />
      {project.url.site && (
        <>
          <Button
            href={project.url.site}
            text="Vist Website"
            icon="external-link"
            variant="secondary"
            size="lg"
            external
          />
          <br />
          <br />
        </>
      )}
      {/* <DetailedContent></DetailedContent> */}
      <Keyword {...project} />
    </>
  );
}
