import DataInterface from "@/app/interfaces/Data";

export default function About({ description }: DataInterface) {
  if (description === undefined) {
    return false;
  }
  return (
    <>
      <h2>About</h2>
      <p>{description}</p>
    </>
  );
}
