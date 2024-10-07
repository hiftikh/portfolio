import { Lora } from "next/font/google";
const font = Lora({ subsets: ["latin"], display: "swap" });

import { joinClassNames } from "@/lib/utils";

export default function Header(params: any) {
  const textAlign = params.align ? `text-${params.align}` : "";
  const underlineAlign = params.align == "center" ? `mx-auto` : "";

  const className = joinClassNames(
    "text-4xl font-bold py-4",
    `${params.className}`,
    `${textAlign}`
  );

  return (
    <>
      <div className="mb-10">
        <header className={font.className}>
          <h1 className={className}>{params.children || "Header Text"}</h1>
          {params.underline && (
            <div
              className={joinClassNames(
                "w-2/12 underline h-1 bg-accent border-accent",
                underlineAlign
              )}
            ></div>
          )}
        </header>
      </div>
    </>
  );
}
