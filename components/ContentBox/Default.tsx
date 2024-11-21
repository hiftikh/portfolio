import React from "react";
import { Badge } from "@/components/ui/badge";
import DataInterance from "../../app/interfaces/Data";
import Image from "next/image";
import { cn, orderByRecent } from "@/lib/utils";
import Button from "@/components/Button";

export interface CardProps {
  data: DataInterance[];
  includeDesc?: boolean;
  type?: string;
}

export default function ContentBox(props: CardProps) {
  const data = props.data.sort(orderByRecent);
  return (
    <>
      <div
        className={cn(
          "my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {data.map((item, index) => (
          <React.Fragment key={index}>
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
                {props.includeDesc && (
                  <p className="text-black/60 leading-tight">
                    {item.description}
                  </p>
                )}
                <ButtonGroup {...item} />
                {item.keywords && <KeyWords {...item} />}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

const KeyWords = ({ keywords }: DataInterance) => {
  return (
    <div className="flex-wrap justify-normal">
      {keywords &&
        keywords.map((keyword, index) => (
          <Badge
            variant="outline"
            className="mr-1 mt-2 text-gray-500"
            key={index}
          >
            {keyword}
          </Badge>
        ))}
    </div>
  );
};

const ButtonGroup = ({ url, slug }: DataInterance) => {
  return (
    <div className="flex mt-4 mb-4 justify-between gap-2">
      {slug && (
        <Button href={`work/${slug}`} className="basis-1/2" text="Learn More" />
      )}
      {url?.github && (
        <Button
          href={url.github}
          text="Github"
          external
          icon="external-link"
          variant={slug ? "outline" : "default"}
          className="basis-1/2"
        />
      )}
      {url?.site && (
        <Button
          href={url.site}
          text="Website"
          external
          icon="external-link"
          className="basis-1/2"
          variant="outline"
        />
      )}
    </div>
  );
};
