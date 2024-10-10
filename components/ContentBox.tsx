import { Badge } from "@/components/ui/badge";
import WorkInterance from "../app/interfaces/Work";
import ProjectInterance from "../app/interfaces/Project";
import Image from "next/image";
import Link from "next/link";
import {
  orderByNewDate,
  orderByAlphabetically,
  displayYear,
} from "@/lib/utils";

interface CardProps {
  data: WorkInterance[] | ProjectInterance[];
}

export default function ContentBox({ data }: CardProps) {
  return (
    <>
      <div className="my-10  grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.sort(orderByNewDate).map((item) => (
          <Link
            href={`/work/${item.slug}`}
            key={item.id}
            className="border-0 rounded-xl bg-transparent overflow-hidden group "
          >
            {item.img.banner && (
              <div className="relative bg-black">
                <Image
                  width={600}
                  height={600}
                  src={item.img.banner.url || ""}
                  alt={item.img.banner.alt || ""}
                  className="group-hover:opacity-60"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkWNz6HwAD/AIpceji/QAAAABJRU5ErkJggg=="
                />

                {/* {item.dateAdded && <DateAddedComp {...item} />} */}
              </div>
            )}
            <div className="p-5 bg-white h-full">
              {item.name && <Title {...item} />}
              {item.keywords && <KeyWords {...item} />}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

const DateAddedComp = ({ dateAdded }: WorkInterance) => {
  return (
    <p className=" text-sm absolute font-semibold bottom-3 right-3 bg-black/70 outline-black py-1 px-5 rounded-xl">
      {displayYear(dateAdded || "####")}
    </p>
  );
};

const Title = ({ name }: WorkInterance) => {
  return (
    <h2 className="leading-7 text-black pb-2 font-semibold text-xl">{name}</h2>
  );
};

const KeyWords = ({ keywords }: WorkInterance) => {
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
