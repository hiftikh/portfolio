import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WorkInterance from "../../app/interfaces/Data";
import Image from "next/image";
import Link from "next/link";
import { orderByNewDate, orderByAlphabetically } from "@/lib/utils";

interface CardProps {
  data: WorkInterance[];
}

export const ContentBox: React.FC<CardProps> = ({ data }: CardProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 my-8 sm:grid-cols-2 lg:grid-cols-3 relative">
        {data.sort(orderByNewDate).map((item) => (
          <Link
            href={`/work/${item.slug}`}
            key={item.id}
            className="relative block group overflow-hidden"
          >
            <Card className="h-96 border-0 overflow-hidden rounded-none">
              {item.img.banner && (
                <Image
                  fill
                  src={`${item.img.banner.url}` || ""}
                  alt={item.img.banner.alt || ""}
                  // style={{ objectFit: "contain" }}
                  className=" "
                />
              )}

              <div className="relative h-full">
                <div className="transition-all transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-black/70 h-full w-full flex items-center justify-center">
                  <CardHeader className="">
                    <CardTitle className="leading-7 text-secondary font-bold">
                      {item.name || "Name"}
                    </CardTitle>
                  </CardHeader>
                  {item.keywords && (
                    <div className="flex-wrap justify-normal absolute bottom-4">
                      {item.keywords
                        .sort(orderByAlphabetically)
                        .map((keyword, index) => (
                          <Badge
                            variant="outline"
                            className="mr-1 mb-2 text-black bg-white "
                            key={index}
                          >
                            {keyword}
                          </Badge>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ContentBox;
