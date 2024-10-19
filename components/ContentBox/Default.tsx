import React, { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import DataInterance from "../../app/interfaces/Data";
import Image from "next/image";
import Link from "next/link";
import { orderByRecent, orderByAlphabetically } from "@/lib/utils";
import Button from "@/components/Button";
import Loading from "@/app/loading";

export interface CardProps {
  data: DataInterance[];
  flatCard?: boolean;
}

export default function ContentBox({ data, flatCard = false }: CardProps) {
  const updateHREF = (item: DataInterance) => {
    return item.slug ? `/work/${item.slug}` : item.url?.site;
  };
  data = data.sort(orderByRecent);
  return (
    <>
      <div className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {flatCard ? (
              <CardComponent {...item} />
            ) : (
              <Link
                href={updateHREF(item) || ""}
                target={item.slug ? "_self" : "_blank"}
              >
                <CardComponent {...item} />
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

const CardComponent = (item: DataInterance) => {
  return (
    <div className="rounded-xl overflow-hidden h-full">
      <Image
        width={600}
        height={600}
        src={item.img.banner?.url || "/img/placeholder-image.jpg"}
        alt={item.img.banner?.alt || "Placeholder Image"}
        placeholder="blur"
        blurDataURL="/img/placeholder-image.jpg"
      />
      <div className="p-5 bg-white h-full">
        <h2 className="leading-7 text-black font-semibold text-xl">
          {item.name || "Name"}
        </h2>
        {item.keywords && <KeyWords {...item} />}
        {item.url?.github && <ButtonGroup {...item} />}
      </div>
    </div>
  );
};

const KeyWords = ({ keywords }: DataInterance) => {
  return (
    <div className="flex-wrap justify-normal">
      {keywords &&
        keywords.sort(orderByAlphabetically).map((keyword, index) => (
          <Badge
            variant="outline"
            className="mr-1 mb-2 text-gray-500"
            key={index}
          >
            {keyword}
          </Badge>
        ))}
    </div>
  );
};

const ButtonGroup = ({ url }: DataInterance) => {
  return (
    <div className="flex gap-3 mt-4">
      {url?.github && (
        <Button
          href={url.github}
          className="text-secondary w-3/6"
          text="Github"
          external
          icon="external-link"
        />
      )}
      {url?.site && (
        <Button
          href={url.site}
          className="text-secondary w-3/6"
          text="Website"
          external
          icon="external-link"
        />
      )}
    </div>
  );
};
