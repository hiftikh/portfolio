"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      className={`fixed bottom-4 right-4 text-white rounded-full bg-accent p-2 transition-opacity duration-500 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={scrollToTop}
      aria-label="ToTopButton"
    >
      <ChevronUp />
    </button>
  );
}
