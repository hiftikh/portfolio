import { joinClassNames } from "@/lib/utils";
import Image from "next/image";

interface Artwork {
  caption?: string;
  imageURL: string;
  alt: string;
  width?: number;
  height?: number;
  bgColor?: string;
}

export default function Artwork(params: Artwork) {
  return (
    <>
      <div className="my-10 mx-auto md:w-8/12 text-center">
        <div className={params.bgColor || "bg-transparent"}>
          <Image
            src={params.imageURL}
            alt={params.alt || "Alt Tag"}
            width={params.width || 800}
            height={params.height || 800}
            className={joinClassNames(
              "mx-auto",
              params.bgColor || "bg-transparent"
            )}
            style={{ height: "auto", width: "auto" }}
          />
        </div>
        {params.caption && <Caption {...params} />}
      </div>
    </>
  );
}

const Caption = ({ caption }: Artwork) => {
  return (
    <p className="py-2 px-2 font-light mx-auto bg-slate-800/30 text-xs md:text-s">
      {caption}
    </p>
  );
};
