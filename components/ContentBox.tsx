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

interface CardProps {
  data: ContextCard[];
}

export const ContentBox: React.FC<CardProps> = ({ data }: CardProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 my-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Link href={`/work/${item.slug}`} key={item.id}>
            <Card className="">
              {/* <Image src={item.img.banner.url} alt="" height={3} width={3} /> */}
              <CardHeader>
                <CardTitle>{item.name || "Name"} </CardTitle>
                <CardDescription>
                  {item.description || "Description"}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                {item.keywords.map((keyword, index) => (
                  <Badge
                    variant="outline"
                    className="mr-1 text-gray-500"
                    key={index}
                  >
                    {keyword}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ContentBox;
