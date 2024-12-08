import Icon from "@/components/Icon";
import Artwork from "../Artwork";

export default function MuslimSoupKitchen() {
  return (
    <>
      <h2>Process</h2>
      <p>
        The logo/icon was designed in&nbsp;
        <a
          href="https://www.adobe.com/ca/products/illustrator.html"
          target="_blank"
        >
          Adobe Illustrator
          <Icon name="external-link" />
        </a>
        .
      </p>
      <h3>Logo</h3>
      <p>
        An acronym was used to better create a concise and memorable logo. The
        font selected for the acronym was a serif typeface to signify the
        history of the organization and the overall professionalism.
      </p>
      <h3>Icon</h3>
      <p>
        Wheat represents nourishment that it provides to the people. Wheat is
        also mentioned several times within the Quran. The symbol of the
        crescent moon is synonyms with Islam. The combination of these two
        symbols conveys...
      </p>
      <Artwork
        imageURL="/img/artwork/work/msk-logo-mock-up.png"
        alt="Muslim Soup Kitchen Logo"
        caption="Left: Primary Logo | Right: Alternate Logo"
      />
    </>
  );
}
