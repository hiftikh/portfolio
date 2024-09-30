import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContextCard from "../app/interfaces/Card";
import Image from "next/image";
import Link from "next/link";
import { orderByNewDate, orderByAlphabetically } from "@/lib/utils";

interface CardProps {
  data: ContextCard[];
}

export const ContentBox: React.FC<CardProps> = ({ data }: CardProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 my-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.sort(orderByNewDate).map((item) => (
          <Link href={`/work/${item.slug}`} key={item.id}>
            <Card className="border-none border-b-8 border-accent overflow-hidden hover:shadow-xl h-full">
              {item.img.logo && (
                <div className="relative h-28 bg-secondary">
                  <Image
                    fill
                    src={`/img/${item.img.logo.url}` || ""}
                    alt={item.img.logo.alt || ""}
                    style={{ objectFit: "contain" }}
                    className="p-5"
                  />
                </div>
              )}
              <CardHeader className="bg-gray-50 text-center pb-4">
                <CardTitle className="leading-7">
                  {item.name || "Name"}
                </CardTitle>

                {/* <CardDescription>
                  {item.description || "Description"}
                </CardDescription> */}
              </CardHeader>
              {item.keywords && (
                <CardFooter className="bg-gray-50 flex-wrap justify-center">
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
                </CardFooter>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ContentBox;
