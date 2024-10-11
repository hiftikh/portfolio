import Icon from "@/components/Icon";
import Artwork from "../Artwork";
import Image from "next/image";

export default function Pistachios() {
  return (
    <>
      <h2 className="text-2xl font-bold">Process</h2>

      <p>
        Designed the logo using&nbsp;
        <a
          href="https://www.adobe.com/ca/products/illustrator.html"
          target="_blank"
        >
          Adobe Illustrator
          <Icon name="external-link" />
        </a>
        .
      </p>
      <h3 className="text-xl font-bold">Logo</h3>

      <p>
        The client wanted a simple logo for their grocery store called
        "Pistachios". I designed the logo to be a wordmark logo embded with
        leafs to repersent freshness of produce. The color theme was inspired by
        pistachio nuts with the green and natural beige.
      </p>
      <Image
        src="/img/logo/pistachios.png"
        width={500}
        height={179}
        alt="Pistachios Logo"
        className="mx-auto my-10"
      />
    </>
  );
}
