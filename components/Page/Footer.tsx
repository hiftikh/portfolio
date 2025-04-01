export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} Haris Iftikhar. All Rights Reserved.`;
  return (
    <>
      <footer className="mt-auto w-10/12 lg:max-w-6xl mx-auto">
        <div className="container py-5 mx-auto text-center">
          <hr className="mb-5 border-white/20" />
          <p className="text-secondary text-sm">{footerText}</p>
        </div>
      </footer>
    </>
  );
}
