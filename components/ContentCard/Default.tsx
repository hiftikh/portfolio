import Image from "next/image";
import DataInterface from "@/app/interfaces/Data";

import { orderByRecent } from "@/lib/utils";

import FadeUpAnimation from "../Animatation/FadeUp";
import ButtonGroup from "./ButtonGroup";
import Keywords from "./Keywords";

interface ContentCardProps {
  data: DataInterface[];
  pathname: string | null;
  includeDesc?: boolean | null;
}

export default function ContentCard(props: ContentCardProps) {
  const { data, includeDesc, pathname } = props;
  const dataFiltered = data.filter((data) => data.show).sort(orderByRecent);

  return (
    <div className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {dataFiltered.map((item) => (
        <FadeUpAnimation
          className="rounded-xl overflow-hidden h-full"
          key={item.id}
        >
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
            {includeDesc && (
              <p className="text-black/60 leading-tight">{item.description}</p>
            )}
            <ButtonGroup pathname={pathname} data={item} />
            <Keywords data={item} />
          </div>
        </FadeUpAnimation>
      ))}
    </div>
  );
}
