import Image from "next/image";

export default function Artwork(params: any) {
  return (
    <>
      <div className="mx-auto my-10 text-center bg w-full md:w-full">
        <div className="mb-10">
          <Image
            src={params.imageURL}
            alt={params.alt}
            width={1000}
            height={1000}
            className="mx-auto"
          />
          <p className="py-3 px-3 font-light bg-slate-800/30 text-xs md:text-base">
            {params.caption}
          </p>
        </div>
      </div>
    </>
  );
}
