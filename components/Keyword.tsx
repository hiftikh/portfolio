import DataInterface from "@/app/interfaces/Data";
import { orderByAlphabetically } from "@/lib/utils";
import { Badge } from "./ui/badge";

export default function KeyWords({ keywords }: DataInterface) {
  if (keywords?.length === 0) {
    return false;
  }
  return (
    <div className="container mx-auto my-6 md:w-8/12 text-center">
      {keywords
        ?.sort(orderByAlphabetically)
        .map((keyword: any, index: number) => (
          <Badge
            variant="outline"
            className="text-slate-300 border-slate-300 mx-1 px-5 py-2 mb-3"
            key={index}
          >
            {keyword}
          </Badge>
        ))}
    </div>
  );
}
