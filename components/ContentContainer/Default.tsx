import ContentCard from "../ContentCard/Default";
import { ContentBoxProps } from "@/app/interfaces/ContentBoxProps";
import { orderByRecent } from "@/lib/utils";

export default function ContentBox(props: ContentBoxProps) {
  const { data, includeDesc } = props;
  const dataUpdated = data.filter((data) => data.show).sort(orderByRecent);

  return (
    <div className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {dataUpdated.map((item, index) => (
        <ContentCard data={item} key={index} includeDesc={includeDesc} />
      ))}
    </div>
  );
}
