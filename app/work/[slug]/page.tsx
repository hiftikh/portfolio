import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/json/work.json";
import BreadCrumbCus from "@/components/BreadCrumbCus";

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

  console.log(work.description.company);
  const breadCrumbObj = {
    currentPage: work.name,
    currentSubPageURL: "/work",
    currentSubPageName: "Work",
  };

  return (
    <>
      <div className="w-10/12 mx-auto">
        <BreadCrumbCus {...breadCrumbObj} />
        <Header underline>{work.name}</Header>
        {work.description.company && (
          <p className="text-secondary">{work.description.company}</p>
        )}
        {/* <div className="mx-auto md:w-8/12">
          <Header underline>{work.name}</Header>
         

          <Image
            src={`/img/${work.img.logo.url}`}
            alt={`${work.name} Logo`}
            height={200}
            width={200}
            className="mx-auto my-10"
          />
        </div> */}

        <div className="container mx-auto my-6 text-center">
          {work.img.artwork &&
            work.img.artwork.map((art, index) => (
              <div key={index}>
                <Image src={art.url} width={1000} height={1000} alt={art.alt} />
                <p>{art.caption}</p>
              </div>
            ))}
        </div>

        <div className="container mx-auto my-6  md:w-8/12 text-center">
          {work.keywords.map((keyword, index) => (
            <Badge
              variant="outline"
              className="text-secondary mr-2 px-5 py-2"
              key={index}
            >
              {keyword}
            </Badge>
          ))}
        </div>
        <div className="container mx-auto my-6 w-8/12 text-center">
          {work.url && (
            <Button
              asChild
              className="my-5 text-primary-secondary hover:bg-accent"
            >
              <Link href={work.url} target="_blank">
                Website
              </Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
