import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/Button";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/json/work.json";
import BreadCrumbCustom from "@/components/BreadCrumbCustom";
import dynamic from "next/dynamic";
import Icon from "@/components/Icon";
import WorkInterface from "@/app/interfaces/Data";
import type { Metadata, ResolvingMetadata } from "next";
import { orderByAlphabetically } from "@/lib/utils";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const work = data.find((item) => item.slug.toString() === slug);
  return {
    title: work?.name,
  };
}

export function generateStaticParams() {
  return data.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Page({ params }: any) {
  const { slug } = await params;
  const work = data.find((item) => item.slug.toString() === slug);

  if (!work) {
    notFound();
  }

  const DetailedContent = dynamic(
    () =>
      import(`@/components/content/${work.componentName}`).catch((err) => {
        return () => "";
      }),
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
      {work.description && <About {...work} />}
      <DetailedContent></DetailedContent>
      {work.url && (
        <div className="container mx-auto my-6 w-8/12 text-center">
          <Button
            href={work.url.site}
            text="Website"
            icon="external-link"
            external
            variant="secondary"
          />
        </div>
      )}
      <br />
      {work.keywords && <KeyWords {...work} />}
    </>
  );
}

const About = ({ description }: WorkInterface) => {
  return (
    <>
      <h2>About</h2>
      <p>{description}</p>
    </>
  );
};

const KeyWords = ({ keywords }: WorkInterface) => {
  return (
    <div className="container mx-auto my-6 md:w-8/12 text-center">
      {keywords
        ?.sort(orderByAlphabetically)
        .map((keyword: any, index: number) => (
          <Badge
            variant="outline"
            className="text-slate-300 border-slate-300 mx-1 px-5 py-2 mb-3"
            key={index}
          >
            {keyword}
          </Badge>
        ))}
    </div>
  );
};
