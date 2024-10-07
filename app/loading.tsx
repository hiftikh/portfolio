import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <>
      <div className="text-center mx-auto">
        <LoaderCircle className="animate-spin text-white text-center h-7 w-7 mx-auto" />
      </div>
    </>
  );
}
