export default function Footer(params: any) {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="mt-auto">
        <div className="container py-5 mx-auto text-center">
          <hr className="mb-5 border-white/40" />
          <p className="text-secondary text-sm ">
            © {currentYear} Haris Iftikhar. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
