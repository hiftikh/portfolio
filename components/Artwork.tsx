import Image from "next/image";
import { cn } from "@/lib/utils";

import ArtworkInterface from "@/app/interfaces/Artwork";

export default function Artwork(props: ArtworkInterface) {
  return (
    <div className="my-10 mx-auto md:w-8/12 text-center">
      <div className={props.bgColor || "bg-transparent"}>
        <Image
          src={props.imageURL}
          alt={props.alt || "Alt Tag"}
          width={props.width || 800}
          height={props.height || 800}
          className={cn("mx-auto", props.bgColor || "bg-transparent")}
          style={{ height: "auto", width: "auto" }}
        />
      </div>
      <Caption {...props} />
    </div>
  );
}

const Caption = ({ caption }: ArtworkInterface) => {
  if (caption?.length === 0) {
    return false;
  }
  return (
    <p className="py-2 px-2 font-light mx-auto text-xs md:text-s">{caption}</p>
  );
};
