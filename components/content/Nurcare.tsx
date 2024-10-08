import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function Nurcare() {
  return (
    <>
      <h2 className="text-2xl font-bold">Process</h2>
      <p>
        Designed the logo and business card using{" "}
        <a
          href="https://www.adobe.com/ca/products/illustrator.html"
          target="_blank"
        >
          Adobe Illustrator
          <Icon name="external-link" />
        </a>
        and{" "}
        <a
          href="https://www.adobe.com/ca/products/indesign.html"
          target="_blank"
        >
          Adobe InDesign
          <Icon name="external-link" />
        </a>
        respectfully.
      </p>
      <h3 className="text-xl font-bold">Logo</h3>
      <p>
        Taking inspriation from the words <b>Noor(Arabic for light)</b>,{" "}
        <b>Nurture</b>, and <b>Care</b>, the idea of{" "}
        <b>
          <i>Nurcare</i>
        </b>{" "}
        was born. The green pastel color evoking a calm nurturing atmosphere and
        the yellow color producing a sense of warmth. The typography is in
        lowercase and rounded which conveys comfort and softness. The yellow
        rotated squares on the &quot;u&quot; takes inspiration from the{" "}
        <a href="https://en.wikipedia.org/wiki/Arabic_alphabet" target="_blank">
          Arabic Alphabet
          <Icon name="external-link" />
        </a>
        .
      </p>
      <h3 className="text-xl font-bold">Icon</h3>
      <p>
        Having open hands means having an open heart which allows you to talk to
        someone in a very open and honest way. The rays of sunshine symbolzing a
        positive and welcoming presense.
      </p>
      <Artwork
        imageURL="/img/artwork/nurcare-logo-mock-up.png"
        alt="Nurcare Logo Mock Up"
        caption="Logo mock up. (Left: Normal Logo, Right: Alt Logo)."
      />
      <h3 className="text-xl font-bold">Business Card</h3>
      <Artwork
        imageURL="/img/artwork/nurcare-business-card-mock-up.jpg"
        alt="Business Card Mock Up"
        caption="Business card mock up."
      />
    </>
  );
}
