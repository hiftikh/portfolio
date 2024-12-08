import Icon from "@/components/Icon";
import Artwork from "../Artwork";

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
        The client wanted a simple logo for their grocery store named
        &quot;Pistachios&quot;. I designed the logo to be a wordmark logo
        embedded with leafs to signify the freshness of their produce. The color
        theme was inspired by the natural green and beige tones of pistachio
        nuts.
      </p>
      <Artwork
        imageURL="/img/logo/pistachios.png"
        alt="Pistachios Logo"
        caption="Pistachios Logo"
        width={500}
        height={179}
      />
    </>
  );
}
