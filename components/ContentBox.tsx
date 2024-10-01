import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContextCard from "../app/interfaces/Card";
import Image from "next/image";
import Link from "next/link";
import {
  orderByNewDate,
  orderByAlphabetically,
  displayYear,
} from "@/lib/utils";

interface CardProps {
  data: ContextCard[];
}

export const ContentBox: React.FC<CardProps> = ({ data }: CardProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 mt-10 mx-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.sort(orderByNewDate).map((item) => (
          <Link href={`/work/${item.slug}`} key={item.id}>
            <div className="border-0 rounded-xl bg-transparent overflow-clip h-full hover:shadow-lg hover:shadow-black/40 transition ease-in-out duration-300 ">
              {item.img.banner && (
                <div className="relative outline-0">
                  <Image
                    width={600}
                    height={600}
                    src={item.img.banner.url || ""}
                    alt={item.img.banner.alt || ""}
                  />
                  {item.dateAdded && (
                    <p className="text-sm absolute font-bold bottom-3 right-3 bg-black/70 outline-black py-1 px-5 rounded-xl">
                      {displayYear(item.dateAdded)}
                    </p>
                  )}
                </div>
              )}
              <div className="p-5 bg-white h-full">
                <h2 className="leading-7 text-black pb-2 font-semibold text-xl">
                  {item.name || "Name"}
                </h2>

                {item.keywords && (
                  <div className="flex-wrap justify-normal">
                    {item.keywords
                      .sort(orderByAlphabetically)
                      .map((keyword, index) => (
                        <Badge
                          variant="outline"
                          className="mr-1 mb-2 text-gray-500"
                          key={index}
                        >
                          {keyword}
                        </Badge>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ContentBox;
