import { Lora } from "next/font/google";
const font = Lora({ subsets: ["latin"], display: "swap" });
import { cn } from "@/lib/utils";

export default function Header(params: any) {
  const textAlign = params.align ? `text-${params.align}` : "";
  const underlineAlign = params.align == "center" ? `mx-auto` : "";

  const className = cn(
    "text-4xl font-bold py-4 text-secondary",
    `${params.className}`,
    `${textAlign}`
  );

  return (
    <div className="mb-10">
      <header className={font.className}>
        <h1 className={className}>{params.children || "Header Text"}</h1>
        {params.underline && (
          <div
            className={cn(
              "w-2/12 underline h-1 bg-accent border-accent",
              underlineAlign
            )}
          ></div>
        )}
      </header>
    </div>
  );
}
