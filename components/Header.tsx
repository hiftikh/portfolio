export default function Header({ title }: { title: string }) {
  return (
    <>
      <header>
        <h1 className="text-3xl font-bold text-white py-6">{title}</h1>
      </header>
    </>
  );
}
