import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/json/work.json";
import { Container } from "lucide-react";

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

  return (
    <>
      <Header title={work.name} className="text-center"></Header>
      <div className="container mx-auto w-10/12 md:w-8/12">
        <p className="text-center text-primary">{work.description}</p>
        <Image
          src={`/img/${work.img.logo.url}`}
          alt={`${work.name} Logo`}
          height={200}
          width={200}
          className="mx-auto my-10"
        />
      </div>

      <div className="container mx-auto my-6 w-10/12 md:w-8/12 text-center">
        {work.keywords.map((keyword, index) => (
          <Badge
            variant="outline"
            className="text-primary mr-2 px-5 py-2"
            key={index}
          >
            {keyword}
          </Badge>
        ))}
      </div>
      <div className="container mx-auto my-6 w-8/12 text-center">
        <Button asChild className="my-5 text-primary-secondary hover:bg-accent">
          <Link href={work.url} target="_blank">
            Website
          </Link>
        </Button>
      </div>
    </>
  );
}
