import DataInterface from "@/app/interfaces/Data";
import Button from "@/components/Button";

interface ButtonGroupProps {
  data: DataInterface;
  pathname: string | null;
}

export default function ButtonGroup(props: ButtonGroupProps) {
  const { data, pathname } = props;
  const url = data.url;

  if (url === null || url === undefined) {
    return false;
  }

  return (
    <div className="flex mt-4 mb-4 justify-between gap-2">
      {url?.slug !== null && url.slug?.length !== 0 && (
        <Button
          href={`/${pathname}/${url?.slug}`}
          text="Learn More"
          variant="default"
          className="grow-1 basis-1/2"
        />
      )}
      {url?.site && (
        <Button
          href={url.site}
          text="Website"
          external
          icon="external-link"
          variant="outline"
          className="grow-1 basis-1/2"
        />
      )}
      {url?.github && (
        <Button
          href={url.github}
          text="Github"
          external
          icon="external-link"
          variant="outline"
          className="grow-1 basis-1/2"
        />
      )}
    </div>
  );
}
