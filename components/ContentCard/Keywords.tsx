import DataInterface from "@/app/interfaces/Data";
import { Badge } from "@/components/ui/badge";

interface KeywordProps {
  data: DataInterface;
}

export default function Keywords(props: KeywordProps) {
  const { keywords } = props.data;

  if (keywords === null || keywords === undefined) {
    return false;
  }

  return (
    <div className="flex-wrap justify-normal">
      {keywords.map((keyword, index) => (
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
}
