import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/json/work.json";
import BreadCrumbCustom from "@/components/BreadCrumbCustom";
import dynamic from "next/dynamic";
import Icon from "@/components/Icon";
import WorkInterface from "@/app/interfaces/Work";

export async function generateStaticParams() {
  return data.map((item) => ({
    slug: item.slug,
  }));
}

export default function Page({ params }: any) {
  const { slug } = params;
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
      <div className="w-10/12 mx-auto">
        <BreadCrumbCustom {...breadCrumbObj} />
        <Header underline>{work.name}</Header>
        {work.description && <About {...work} />}
        <DetailedContent></DetailedContent>
        {work.url && <Btn {...work} />}
        {work.keywords && <KeyWords {...work} />}
      </div>
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

const Btn = ({ url }: WorkInterface) => {
  return (
    <div className="container mx-auto my-6 w-8/12 text-center">
      <Button
        asChild
        className="my-5 text-primary bg-secondary hover:bg-slate-300 hover:text-primary"
      >
        <Link href={`${url?.site}`} target="_blank">
          Website <Icon name="external-link" />
        </Link>
      </Button>
    </div>
  );
};

const KeyWords = ({ keywords }: WorkInterface) => {
  return (
    <div className="container mx-auto my-6 md:w-8/12 text-center">
      {keywords?.map((keyword: any, index: number) => (
        <Badge
          variant="outline"
          className="text-slate-300 border-slate-300 mx-1 px-5 py-2"
          key={index}
        >
          {keyword}
        </Badge>
      ))}
    </div>
  );
};
