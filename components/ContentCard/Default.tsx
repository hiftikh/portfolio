import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/Button";
import DataInterfaces from "@/app/interfaces/Data";
import { ContentCardProps } from "@/app/interfaces/ContentCardProps";
import FadeUpAnimation from "../Animatation/AnimatedComponent";

export default function ContentCard(props: ContentCardProps, key: any) {
  const { data, includeDesc } = props;

  return (
    <FadeUpAnimation className="rounded-xl overflow-hidden h-full" key={key}>
      <Image
        width={600}
        height={600}
        src={data.img.banner?.url || "/img/placeholder-image.jpg"}
        alt={data.img.banner?.alt || "Placeholder Image"}
        placeholder="blur"
        blurDataURL="/img/placeholder-image.jpg"
      />
      <div className="p-5 bg-white h-full">
        <h2 className="leading-7 text-black font-semibold text-xl">
          {data.name || "Name"}
        </h2>
        {includeDesc && (
          <p className="text-black/60 leading-tight">{data.description}</p>
        )}
        <ButtonGroup {...data} />
        {data.keywords && <KeyWords {...data} />}
      </div>
    </FadeUpAnimation>
  );
}

const KeyWords = ({ keywords }: DataInterfaces) => {
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

const ButtonGroup = ({ url, slug }: DataInterfaces) => {
  return (
    <div className="flex mt-4 mb-4 justify-between gap-2">
      {slug && (
        <Button
          href={`/work/${slug}`}
          className="basis-1/2"
          text="Learn More"
        />
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
