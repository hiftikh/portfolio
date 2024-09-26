import { Lora } from "next/font/google";
const font = Lora({ subsets: ["latin"], display: "swap" });

export default function Header(params: any) {
  let className =
    "text-4xl font-bold font py-4 text-secondary text-center " +
    `${params.className}`;

  return (
    <>
      <header className={font.className}>
        <h1 className={className}>{params.title}</h1>
        {params.underline && (
          <hr className="mx-auto w-1/12 underline h-1 bg-accent border-accent" />
        )}
      </header>
    </>
  );
}
