import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function Nurcare() {
  return (
    <>
      <h2 className="text-2xl font-bold">Process</h2>
      <p>
        Designed the logo/icon business card using&nbsp;
        <a
          href="https://www.adobe.com/ca/products/illustrator.html"
          target="_blank"
        >
          Adobe Illustrator
          <Icon name="external-link" />
        </a>
        &nbsp; and&nbsp;
        <a
          href="https://www.adobe.com/ca/products/indesign.html"
          target="_blank"
        >
          Adobe InDesign
          <Icon name="external-link" />
        </a>
        &nbsp; respectfully.
      </p>
      <h3 className="text-xl font-bold">Logo</h3>
      <p>
        Taking inspriation from the words <b>Noor(Arabic for light)</b>,&nbsp;
        <b>Nurture</b>, and <b>Care</b>, the idea of&nbsp;
        <b>
          <i>Nurcare</i>
        </b>
        &nbsp; was born. The green pastel color evoking a calm nurturing
        atmosphere and the yellow color producing a sense of warmth. The
        typography is in lowercase and rounded which conveys comfort and
        softness. The yellow rotated squares on the &quot;u&quot; takes
        inspiration from the&nbsp;
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
        caption="Left: Primary Logo |  Right: Alternate Logo"
      />
      <h3 className="text-xl font-bold">Business Card</h3>
      <p>
        The front of the business card showcases information about the client.
        Using yellow dots on their name to reaffirm the branding. The heart icon
        on the right displaying rays of sunshines.
      </p>
      <p>
        The back of the business card shows the main logo with a tagline of
        "Rekindle your inner light".
      </p>
      <Artwork
        imageURL="/img/artwork/nurcare-business-card-mock-up.jpg"
        alt="Business Card Mock Up"
        caption="Business card mock up."
      />
    </>
  );
}
