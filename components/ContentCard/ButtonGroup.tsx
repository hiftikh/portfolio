import DataInterface from "@/app/interfaces/Data";
import Button from "@/components/Button";

interface ButtonGroupProps {
  data: DataInterface;
  pathname: string | null;
}

export default function ButtonGroup(props: ButtonGroupProps) {
  const { data, pathname } = props;

  if (data === null || data === undefined) {
    return false;
  }

  return (
    <div className="flex mt-4 mb-4 justify-between gap-2">
      {data.slug !== undefined && data.componentName !== undefined && (
        <Button
          href={`/${pathname}/${data.slug}`}
          className="basis-1/2"
          text="Learn More"
        />
      )}
      {data.url?.github && (
        <Button
          href={data.url.github}
          text="Github"
          external
          icon="external-link"
          variant="outline"
          className="basis-1/2"
        />
      )}
      {data.url?.site && (
        <Button
          href={data.url.site}
          text="Website"
          external
          icon="external-link"
          className="basis-1/2"
          variant="outline"
        />
      )}
    </div>
  );
}
