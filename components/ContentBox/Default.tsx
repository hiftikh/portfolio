import React from "react";
import { Badge } from "@/components/ui/badge";
import DataInterance from "../../app/interfaces/Data";
import Image from "next/image";
import Link from "next/link";
import {
  orderByNewDate,
  orderByAlphabetically,
  displayYear,
} from "@/lib/utils";
import Button from "@/components/Button";
import Data from "../../app/interfaces/Data";

export interface CardProps {
  data: DataInterance[];
  flatCard?: boolean;
}

export default function ContentBox({ data, flatCard = false }: CardProps) {
  const updatedHREF = (item: DataInterance) => {
    return item.slug ? `/work/${item.slug}` : item.url?.site;
  };
  return (
    <>
      <div className="my-10  grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.sort(orderByNewDate).map((item) => (
          <React.Fragment key={item.id}>
            {flatCard ? (
              <CardComp {...item} />
            ) : (
              <Link
                href={updatedHREF(item) || ""}
                target={item.slug ? "_self" : "_blank"}
              >
                <CardComp {...item} />
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

const CardComp = (item: DataInterance) => {
  return (
    <div className="border-0 rounded-xl bg-transparent overflow-hidden group">
      {item.img.banner && <Banner {...item} />}
      <div className="p-5 bg-white h-full">
        {item.name && <Title {...item} />}
        {item.keywords && <KeyWords {...item} />}
        {item.url?.github && <ButtonGroup {...item} />}
      </div>
    </div>
  );
};

const Title = ({ name }: DataInterance) => {
  return (
    <h2 className="leading-7 text-black pb-2 font-semibold text-xl">{name}</h2>
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

const ButtonGroup = ({ url }: Data) => {
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
          variant=""
        />
      )}
    </div>
  );
};

const Banner = ({ img }: DataInterance) => {
  return (
    <div className="relative bg-black">
      <Image
        width={600}
        height={600}
        src={img.banner?.url ?? "/img/placeholder-image.jpg"}
        alt={img.banner?.alt ?? "No Image Found :/"}
        className="group-hover:opacity-60"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkWNz6HwAD/AIpceji/QAAAABJRU5ErkJggg=="
      />
    </div>
  );
};

const DateAdded = ({ dateAdded }: DataInterance) => {
  return (
    <p className=" text-sm absolute font-semibold bottom-3 right-3 bg-black/70 outline-black py-1 px-5 rounded-xl">
      {displayYear(dateAdded ?? "####")}
    </p>
  );
};
