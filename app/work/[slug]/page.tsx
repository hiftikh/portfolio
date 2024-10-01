import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/json/work.json";
import BreadCrumbCustom from "@/components/BreadCrumbCustom";
import dynamic from "next/dynamic";

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
        {work.description && <About description={work.description} />}
        <DetailedContent></DetailedContent>
        {work.img.artwork && <ArtWork artwork={work.img.artwork} />}
        {work.url && <URLBtn url={work.url} />}
        {work.keywords && <KeyWords keywords={work.keywords} />}
      </div>
    </>
  );
}

const About = ({ description }: any) => {
  return (
    <>
      <h2 className="text-2xl font-bold">About</h2>
      <p className="text-secondary">{description}</p>
    </>
  );
};

const ArtWork = ({ artwork }: any) => {
  return (
    <>
      <div className="mx-auto my-10 text-center bg w-full md:w-10/12">
        {artwork.map((art: any, index: number) => (
          <div key={index} className="mb-10">
            <Image
              src={art.url}
              alt={art.alt}
              width={1000}
              height={1000}
              className="mx-auto"
            />
            <p className="py-3 px-3 italic bg-slate-800 text-xs md:text-base">
              {art.caption}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

const URLBtn = ({ url }: any) => {
  return (
    <div className="container mx-auto my-6 w-8/12 text-center">
      <Button
        asChild
        className="my-5 text-primary bg-secondary hover:bg-slate-300 hover:text-primary"
      >
        <Link href={url} target="_blank">
          Website
        </Link>
      </Button>
    </div>
  );
};

const KeyWords = ({ keywords }: any) => {
  return (
    <div className="container mx-auto my-6  md:w-8/12 text-center">
      {keywords.map((keyword: any, index: number) => (
        <Badge
          variant="outline"
          className="text-slate-300 border-slate-300 mr-2 px-5 py-2"
          key={index}
        >
          {keyword}
        </Badge>
      ))}
    </div>
  );
};
