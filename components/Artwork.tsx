import Image from "next/image";

export default function Artwork(params: any) {
  return (
    <>
      <div className="my-10 mx-auto w-full md:w-9/12 text-center">
        <Image
          src={params.imageURL}
          alt={params.alt}
          width={800}
          height={800}
          className="mx-auto"
        />
        <p className="py-2 px-2 font-light bg-slate-800/30 text-xs md:text-s">
          {params.caption}
        </p>
      </div>
    </>
  );
}
